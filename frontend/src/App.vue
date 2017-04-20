<template lang='pug'>
  router-view#app
</template>

<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  class App extends Vue {}

  export default Component(App)
</script>

<style src='@/styles/uikit.scss' lang='scss'></style>
<style src='@/styles/main.scss' lang='scss'></style>
