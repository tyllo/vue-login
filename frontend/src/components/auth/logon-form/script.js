import Vue from 'vue'
import Component from 'vue-class-component'
import uikit from 'uikit'

import AuthForm from '@/components/auth/form'

const components = {
  AuthForm,
}

class LogonForm extends Vue {
  username = ''
  password = ''
  repeatPassword = ''

  get disabled() {
    return (
      !this.username || !this.password ||
      this.password !== this.repeatPassword
    )
  }

  beforeDestroy() {
    const CLOSE_BUTTON = '.uk-modal-close'
    const close = document.querySelector(CLOSE_BUTTON)
    close && close.click()
  }

  async onSubmit() {
    const message = `<b>${this.username}</b> registration!`
    await uikit.modal.alert(message, { center: true })
    this.username = ''
    this.password = ''
    this.repeatPassword = ''
  }
}

export default Component({ components })(LogonForm)
