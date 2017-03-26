import test from 'ava'
import request from 'supertest'
import app from '@/production.bootstrap'

test.beforeEach(t => {
  t.context.request = request(app.listen())
})

test.todo('will think about writing this later')
