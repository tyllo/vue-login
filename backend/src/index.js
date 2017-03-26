import Debug from 'debug'
import config from '@/config'

const debug = Debug('app:server')
const app = config.isProduction
  ? require('@/production.bootstrap').default
  : require('@/development.bootstrap').default

app.listen(config.port, () => {
  debug(`Server started http://localhost:${config.port}`)
})

export default app
