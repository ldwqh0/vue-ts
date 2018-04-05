
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { ScriptLoader } from 'vue-esri'
// import VMap from 'vue-esri'
// Vue.use
@Component({
  template: `<div><v-map style='height:500px;'/></div>`
})
export default class App extends Vue {
  name = 'App'
  mounted() {     
    // ScriptLoader.loadModules
  }
}