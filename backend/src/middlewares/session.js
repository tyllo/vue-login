import Session from 'koa-generic-session'
import convert from 'koa-convert'

export const sessionInstance = convert(Session({
}))

// set the session keys
// app.keys = config.session.keys
