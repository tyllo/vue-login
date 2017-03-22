import CSRF from 'koa-csrf'

export const csrfInstance = new CSRF({
  invalidSessionSecretMessage: 'Invalid session secret',
  invalidSessionSecretStatusCode: 403,
  invalidTokenMessage: 'Invalid CSRF token',
  invalidTokenStatusCode: 403,
  excludedMethods: [ 'GET', 'HEAD', 'OPTIONS' ],
  disableQuery: false
})

export async function csrfHandler (ctx, next) {
  ctx.state.csrf = ctx.csrf
  await next()
}
