<template>
  <div>app</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class App extends Vue {
    name = 'App'
    mounted () {
      console.log('The App component mounted')
    }
  }
</script>
<style lang="less">

</style>
