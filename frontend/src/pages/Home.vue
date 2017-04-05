<template lang='pug'>
  Hello.home-page
</template>

<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import Hello from '@/components/Hello'

  const components = {
    Hello,
  }

  class HomePage extends Vue {
  }

  export default Component({ components })(HomePage)
</script>

<style lang='scss'>
  @import '~@/styles/vars.scss';
  @import '~@/styles/main.scss';

  .home-page {
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>
