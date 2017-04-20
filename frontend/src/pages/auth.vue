<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  class AuthPage extends Vue {
  }

  export default Component(AuthPage)
</script>

<template lang='pug'>
  .auth-pages.uk-flex.uk-flex-middle.uk-flex-center.uk-flex-column
    transition(name='slide-left', mode='out-in')
      router-view
</template>

<style lang='scss' src='@/styles/transition-slide.scss'></style>

<style lang='scss'>
  @import '~@/styles/vars';

  :root {
    --blur-size: 4px;
  }

  .auth-pages {
    height: 100%;
    width: 100%;
    position: relative;

    &::before,
    &::after {
      position: absolute;
      z-index: -1;
      height: 100%;
      width: 100%;
      content: '';
      display: block;
      background-image: url($bg-login-image);
      background-position: center;
      background-size: cover;
    }

    &::after {
      top: 0;
      filter: blur(var(--blur-size));
    }
  }
</style>
