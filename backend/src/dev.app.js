import KoaStatic from 'koa-static'
import Logger from 'koa-logger'

import app from '@/base.app'
import config from '@/config'

const koaStatic = KoaStatic(config.static.path)
const logger = Logger()

app.use(koaStatic)
app.use(logger)

export default app
