import Debug from 'debug'
import config from '@/config'

const debug = Debug('app:server')
const app = config.isProduction
  ? require('@/base.app').default
  : require('@/dev.app').default

app.listen(config.port, () => {
  debug(`Server started http://localhost:${config.port}`)
})

export default app
