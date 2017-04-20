<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import AuthLayout from '@/components/auth/layout'
  import Logo from '@/components/auth/logo'
  import LoginForm from '@/components/auth/login-form'
  import AgreementLinks from '@/components/auth/agreement-links'
  import AuthCallout from '@/components/auth/callout'

  const components = {
    AuthLayout,
    Logo,
    LoginForm,
    AuthCallout,
    AgreementLinks,
  }

  class LoginPage extends Vue {
  }

  export default Component({ components })(LoginPage)
</script>

<template lang='pug'>
  .login-page
    auth-layout.uk-padding-small.uk-margin-bottom
      logo(slot='header')
      login-form
      agreement-links(slot='footer')

    transition(name='fade', mode='out-in', appear)
      auth-callout(
        title='Don\'t have an account?'
        , :path='{ name: "logon" }'
        link-text='Sign up!')
</template>

<style lang='scss' src='@/styles/transition-fade.scss'></style>
