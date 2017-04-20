import Vue from 'vue'
import Component from 'vue-class-component'
import uikit from 'uikit'

import AuthForm from '@/components/auth/form'

const components = {
  AuthForm,
}

class LoginForm extends Vue {
  username = ''
  password = ''

  get disabled() {
    return !this.username || !this.password
  }

  beforeDestroy() {
    const CLOSE_BUTTON = '.uk-modal-close'
    const close = document.querySelector(CLOSE_BUTTON)
    close && close.click()
  }

  onSubmit() {
    const message = `Welcome <b>${this.username}!</b>`
    uikit.modal.alert(message, { center: true })
  }
}

export default Component({ components })(LoginForm)
