export function fromNow (time) {
  if (isToday(time)) {
    return dateFormat(time, 'hh:ss') + '发布'
  } else if (isWithinThreeDay(time)) {
    return howDayFromNow(time) + '天前'
  } else {
    return dateFormat(time, 'yyyy-MM-dd')
  }
}
/**
 * 判断是否是今天
 * @method isToday
 * @param  {timestamp}  time [时间戳]
 * @return {Boolean}      [description]
 * $author kokoro
 * date 2016-03-14
 */
function isToday (time) {
  const now = new Date()
  const thatTime = new Date(time)
  return now.getYear() === thatTime.getYear() && now.getMonth() === thatTime.getMonth() && now.getDay() === thatTime.getDay()
}
/**
 * 判断是否在3天内
 * @method isWithinThreeDay
 * @param  {timestamp}         time [时间戳]
 * @return {Boolean}             [description]
 * $author kokoro
 * date 2016-03-14
 */
function isWithinThreeDay (time) {
  const between = (Date.now() - Number(time)) / 1000
  return between < 86400 * 3
}
/**
 * 计算多少天以前
 * @method howDayFromNow
 * @param  {timestamp}      time [时间戳]
 * @return {Number}           [距今天数]
 * $author kokoro
 * date 2016-03-14
 */
function howDayFromNow (time) {
  const between = (Date.now() - Number(time)) / 1000
  return Math.ceil(between / 86400)
}
/**
 * 时间格式化
 * @method dateFormat
 * @param  {timestamp}   time [时间戳]
 * @param  {String}   fmt  [格式字符串]
 * @return {String}        [格式化后的时间]
 * $author kokoro
 * date 2016-03-14
 */
function dateFormat (time, fmt) {
  time = new Date(time)
  const o = {
    'M+': time.getMonth() + 1, // 月份
    'd+': time.getDate(), // 日
    'h+': time.getHours(), // 小时
    'm+': time.getMinutes(), // 分
    's+': time.getSeconds(), // 秒
    'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
    'S': time.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}
