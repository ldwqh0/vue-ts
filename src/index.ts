// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VMap from 'vue-esri'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VMap)
console.log('Created By ldwqh0@outlook.com')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
