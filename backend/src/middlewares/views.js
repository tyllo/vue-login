import Views from 'koa-views'
import config from '@/config'

const { path, options } = config.views

export const views = Views(path, options)
