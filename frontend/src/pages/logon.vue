<script>
  import Vue from 'vue'
  import Component from 'vue-class-component'

  import AuthLayout from '@/components/auth/layout'
  import Logo from '@/components/auth/logo'
  import LogonForm from '@/components/auth/logon-form'
  import AgreementLinks from '@/components/auth/agreement-links'
  import AuthCallout from '@/components/auth/callout'

  const components = {
    AuthLayout,
    Logo,
    LogonForm,
    AuthCallout,
    AgreementLinks,
  }

  class LogonPage extends Vue {
  }

  export default Component({ components })(LogonPage)
</script>

<template lang='pug'>
  .logon-page
    auth-layout.uk-padding-small.uk-margin-bottom
      logo(slot='header')
      logon-form
      agreement-links(slot='footer')

    transition(name='fade', mode='out-in', appear)
      auth-callout(
        title='Already have an account?'
        , :path='{ name: "login" }'
        link-text='Sign ip!')
</template>

<style lang='scss' src='@/styles/transition-fade.scss'></style>
