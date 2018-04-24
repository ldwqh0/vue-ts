
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
// import { EsriLoader } from 'vue-esri'
// import "vue-esri/vue"
@Component({
  template: `<div><v-map style='height:500px;'/></div>`
})
export default class App extends Vue {
  name = 'App'
  mounted() {
    // Vue.EsriLoader
    // EsriLoader.loadModules(['esri/map']).then(([Map]) => { // 这里能够正确识别定义和导出
    //   console.dir(Map)
    // })
    // this.$router
    console.log(this.$esriLoader)  // 这里报告没有相关属性
  }
}