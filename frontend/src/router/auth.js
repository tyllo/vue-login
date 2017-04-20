import Auth from 'async?name=auth!@/pages/auth'
import Login from 'async?name=auth!@/pages/login'
import Logon from 'async?name=auth!@/pages/logon'
import resetPassword from 'async?name=auth!@/pages/reset-password'

export default {
  path: '/auth',
  alias: '/',
  redirect: '/login',
  name: 'auth',
  component: Auth,
  children: [
    {
      path: 'login',
      alias: ['/login'],
      name: 'login',
      component: Login,
    },
    {
      path: 'logon',
      alias: ['/logon'],
      name: 'logon',
      component: Logon,
    },
    {
      path: 'reset-password',
      alias: ['/reset-password'],
      name: 'reset-password',
      component: resetPassword,
    },
  ],
}
