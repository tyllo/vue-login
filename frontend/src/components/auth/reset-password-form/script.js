import Vue from 'vue'
import Component from 'vue-class-component'
import uikit from 'uikit'

import AuthForm from '@/components/auth/form'


const components = {
  AuthForm,
}

class ResetPasswordForm extends Vue {
  username = ''

  get disabled() {
    return !this.username
  }

  beforeDestroy() {
    const CLOSE_BUTTON = '.uk-modal-close'
    const close = document.querySelector(CLOSE_BUTTON)
    close && close.click()
  }

  async onSubmit() {
    const message = `Email send for <b>${this.username}!</b>`
    await uikit.modal.alert(message, { center: true })
    this.username = ''
  }
}

export default Component({ components })(ResetPasswordForm)
