import Koa from 'koa'
import onerror from 'koa-onerror'
import KoaStatic from 'koa-static'
import Logger from 'koa-logger'
import * as middlewares from '@/middlewares'
import router from '@/routes'
import config from '@/config'

const app = new Koa()
const koaStatic = KoaStatic(config.static.path)
const logger = Logger()

// set the session keys
app.keys = config.session.keys

// middlewares
Object.values(middlewares).forEach(app.use.bind(app))
app.use(koaStatic)
app.use(logger)

// routes
app.use(router.routes())
app.use(router.allowedMethods())

onerror(app)

export default app
