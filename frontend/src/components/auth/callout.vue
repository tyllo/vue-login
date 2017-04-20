<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  const props = {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: Object,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
  }

  class AuthCallout extends Vue {
  }

  export default Component({ props })(AuthCallout)
</script>

<template lang='pug'>
  .auth-callout
    span.title {{ title }}&nbsp;
    router-link.link(:to='path') {{ linkText }}
</template>

<style lang='scss'>
  @import '~@/styles/vars';

  .auth-callout {
    width: 320px;
    line-height: 3;
    border: 2px solid #fff;
    color: #fff;
    text-align: center;
    text-shadow: var(--main-box-shadow);

    > .link {
      font-weight: bold;
    }
  }
</style>
