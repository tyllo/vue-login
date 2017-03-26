import test from 'ava'
import request from 'supertest'
import app from '@/production.bootstrap'

test.beforeEach(t => {
  t.context.request = request(app.listen())
})

test('GET /not-found-test-page', async t => {
  const response = await t.context.request.get('/not-found-test-page').expect(404)
  t.is(response.status, 404, 'should have status code 404')
  t.regex(response.text, /Not Found/, 'returns title in response')
  t.regex(response.text, /not-found-test-page/, 'returns content in response')
})
