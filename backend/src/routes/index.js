import Router from 'koa-router'

import mainController from '@/controllers/main'
import homeController from '@/controllers/home'
import notFoundController from '@/controllers/not-found'

const router = Router()

router
  .get('*', mainController)
  .get('/', homeController)
  .get('*', notFoundController)

export default router
