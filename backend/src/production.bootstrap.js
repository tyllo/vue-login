import Koa from 'koa'
import onerror from 'koa-onerror'
import * as middlewares from '@/middlewares'
import router from '@/routes'
import config from '@/config'

const app = new Koa()

// set the session keys
app.keys = config.session.keys

// middlewares
Object.values(middlewares).forEach(app.use.bind(app))

// routes
app.use(router.routes())
app.use(router.allowedMethods())

onerror(app)

export default app
