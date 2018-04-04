// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log('Created By ldwqh0@outlook.com')
/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
// console.dir(vue)
