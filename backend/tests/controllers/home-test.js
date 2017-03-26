import test from 'ava'
import request from 'supertest'
import app from '@/production.bootstrap'

test.beforeEach(t => {
  t.context.request = request(app.listen())
})

test('GET home page', async t => {
  const response = await t.context.request.get('/').expect(200)
  t.is(response.status, 200, 'should have status code 200')
  t.regex(response.text, /Home/, 'returns title in response')
  t.regex(response.text, /hello world!/, 'returns content in response')
})
