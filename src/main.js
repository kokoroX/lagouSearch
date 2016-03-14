import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import { fromNow } from './filters'

Vue.filter('fromNow', fromNow)

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
