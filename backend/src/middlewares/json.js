import KoaJson from 'koa-json'
import config from 'config'

export const koaJson = KoaJson(config.json)
