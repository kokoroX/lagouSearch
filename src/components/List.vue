<template>
  <ul class="item_con_list">
    <li v-for="item in list" class="con_list_item first_row">
      <div class="list_item_top">
        <div class="position">
          <div class="p_top">
            <a class="position_link" :href="'http://www.lagou.com/jobs/'+ item.positionId +'.html'" target="_blank">
              <h2>{{item.positionName}}</h2>
              <span class="add">[{{item.city}}]</span>
            </a>
            <span class="format-time">{{item.createTimeSort | fromNow}}</span>
          </div>
          <div class="p_bot">
            <span class="money">{{item.salary}}</span>
            <div class="li_b_l">
              经验{{item.workYear}} / {{item.education}}
            </div>
          </div>
        </div>
        <div class="company">
          <div class="company_name">
            <a :href="'http://www.lagou.com/gongsi/'+ item.companyId +'.html'" target="_blank">{{item.companyName}}</a>
          </div>
          <div class="industry">
            {{item.industryField}} / {{item.financeStage}}
          </div>
        </div>
        <div class="com_logo">
          <a :href="'http://www.lagou.com/gongsi/'+ item.companyId +'.html'" target="_blank"><img :src="'http://www.lagou.com/' + item.companyLogo" alt="小鹿美美" width="60" height="60"></a>
        </div>
      </div>
      <div class="list_item_bot">
        <div class="li_b_l">“{{item.positionAdvantage}}”</div>
        <div class="li_b_r">
          <span v-for="item in item.companyLabelList">{{item}}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.list = require('../assets/message.json')
  }
}
</script>

<style>
.item_con_list {
  width: 960px;
  margin: 0 auto;
  margin-top: 100px;
}
.con_list_item {
  color: #555;
  border: 1px solid #e8e8e8;
  margin-top: 18px;
  background: #fff;
}
.list_item_top {
  width: 946px;
  padding-left: 12px;
  padding-top: 14px;
  height: 67px;
}
.list_item_top .position {
  width: 538px;
  float: left;
}
.list_item_top .position .p_top {
    height: 34px;
}
.list_item_top .position .p_top h2 {
  float: left;
  max-width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  color: #00b38a;
  margin: 0;
  font-size: 16px;
}
.list_item_top .position .p_top span.add {
  color: #00b38a;
  font-size: 16px;
}
.list_item_top .position .p_top span {
  float: left;
  color: #999;
  margin: 0 3px;
}
.list_item_top .position .p_top .format-time {
  padding-top: 3px;
}
.list_item_top .position .p_bot span.money {
  color: #fd5f39;
  float: left;
  font-size: 16px;
  margin-right: 20px;
}
.list_item_top .position .p_bot div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.list_item_top .position .p_bot .li_b_l {
  font-size: 14px;
  color: #555;
  padding-top: 3px;
}
.list_item_top .company {
  width: 301px;
  float: left;
  margin-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.list_item_top .company .company_name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  height: 34px;
}
.list_item_top .company .company_name a {
  color: #00b38a;
  font-size: 16px;
}
.list_item_top .company .industry {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.list_item_top .com_logo {
  width: 70px;
  float: left;
  margin-left: 7px;
  padding-right: 10px;
}
.s_position_list .list_item_bot {
  padding-left: 12px;
  height: 39px;
  background-color: #fafafa;
}

.list_item_bot {
    padding-left: 12px;
    height: 39px;
    background-color: #fafafa;
}
.list_item_bot .li_b_l {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  float: left;
  font-size: 14px;
  line-height: 39px;
  width: 543px;
}
.list_item_bot .li_b_r {
  float: left;
  font-size: 12px;
  width: 384px;
  margin-top: 10px;
  margin-left: 15px;
}
.list_item_bot .li_b_r span {
  display: inline-block;
  padding: 0 5px;
  border: 1px solid #dcdcdc;
  margin-right: 10px;
}
</style>
