import Vue from 'vue'
import Component from 'vue-class-component'

class Hello extends Vue {
  msg = 'Welcome to Your Vue.js App'
}

export default Component()(Hello)
