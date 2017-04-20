<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  class FormAuth extends Vue {
    onSumbit(e) {
      this.$emit('submit', e)
    }
  }

  export default Component(FormAuth)
</script>

<template lang='pug'>
  form.auth-form(action='' @submit='onSumbit')
    slot
</template>

<style lang='scss'>
  .auth-form {
    > .title {
      color: #000;
    }

    > .title,
    > .reset {
      font-size: 0.9em;
    }

    > .submit[disabled] {
      background-color: #999;
      border-color: #999;
      color: #fff;
    }
  }
</style>
