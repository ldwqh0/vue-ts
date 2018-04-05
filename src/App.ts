
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { ScriptLoader } from 'vue-esri'
@Component({
  template: `<div><v-map style='height:500px;'/></div>`
})
export default class App extends Vue {
  name = 'App'
  mounted() {     
    ScriptLoader.loadModules(['esri/map']).then(([Map])=>{ // 这里能够正确识别定义和导出
      console.dir(Map) 
    })
    console.log(this.$esri)  // 这里报告没有相关属性
  }
}