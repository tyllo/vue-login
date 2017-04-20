<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import AuthLayout from '@/components/auth/layout'
  import Logo from '@/components/auth/logo'
  import ResetPasswordForm from '@/components/auth/reset-password-form'
  import AgreementLinks from '@/components/auth/agreement-links'
  import AuthCallout from '@/components/auth/callout'

  const components = {
    AuthLayout,
    Logo,
    ResetPasswordForm,
    AuthCallout,
    AgreementLinks,
  }

  class ResetPasswordPage extends Vue {
  }

  export default Component({ components })(ResetPasswordPage)
</script>

<template lang='pug'>
  .reset-password-page
    auth-layout.uk-padding-small.uk-margin-bottom
      logo(slot='header')
      reset-password-form
      agreement-links(slot='footer')

    transition(name='fade', mode='out-in', appear)
      auth-callout(
        title='Return for'
        , :path='{ name: "login" }'
        link-text='sign ip!')
</template>

<style lang='scss' src='@/styles/transition-fade.scss'></style>
