var superagent = require('superagent');
var Promise = require('promise');
var cheerio = require('cheerio');
var async = require('async');
var _ = require('lodash');
var fs = require('fs');

var lagouPositionUrl = 'http://www.lagou.com/jobs/positionAjax.json?px=new&city=%E4%B8%8A%E6%B5%B7';
var lagouDetailUrl = 'http://www.lagou.com/jobs/';
var condition=/vue/i;

// var txt = "1111";
//
// fs.writeFile('message.txt', txt, function (err) {
//     if (err) throw err;
//     console.log('It\'s saved!'); //文件被保存
// });

getPositionList(1).then(function (list) {
  createRequest(list, function (err, result) {
    result = _.filter(result, function (item) {
      return !!item;
    })

    fs.writeFile('message.json', JSON.stringify(result), function (err) {
        if (err) throw err;
        console.log('It\'s saved!'); //文件被保存
    });
  });
});

function createRequest (list, callback) {
  async.mapLimit(list, 5, fetchUrl, callback);
}

/**
 * 获取详情页
 * @method fetchUrl
 * @param  {Object}   url      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 * $author kokoro
 * date 2016-03-14
 */
function fetchUrl (item, callback) {
  var url = lagouDetailUrl + item.positionId + '.html';
  console.log(url)
  // concurrencyCount++;
  // console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url);

  superagent.get(url)
    .end(function (err, res) {
      if (err) {
        return console.error(err);
      }
      // concurrencyCount--;
      var $ = cheerio.load(res.text, {decodeEntities: false});
      if(condition.test($('#container dd.job_bt').html())) {
        // counter++;
        callback(null, item);
      } else {
        callback(null);
      }

    });
};

/**
 * 获取职位列表信息
 * @method getPositionList
 * @param  {Number}        page [页码]
 * @return {Promise}             [description]
 * $author kokoro
 * date 2016-03-14
 */
function getPositionList (page) {
  var positionList = [];
  return new Promise(function (resolve, reject) {
    function request (page) {

      superagent.post(lagouPositionUrl)
        .query({first: false, pn: page, kd: '前端'})
        .end(function (err, res) {
          if (err) {
            reject(console.error(err));
          }
          var data = JSON.parse(res.text);
          var list = data.content.result;

          // if (page < 5) {
          // console.log(list.length)
          if (!!list.length) {
            positionList = _.concat(positionList, (data.content.result));
            request(++page);
          } else {
            resolve(positionList)
          }

        });
    }

    request(page);
  })
}
