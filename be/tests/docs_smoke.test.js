const request = require('supertest');
const { app } = require('../index');

describe('Docs smoke', () => {
  test('GET /api/docs/openapi.json returns 200', async () => {
    const res = await request(app).get('/api/docs/openapi.json');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  test('GET /api/docs/swagger returns 200', async () => {
    const res = await request(app).get('/api/docs/swagger');
    expect(res.statusCode).toBe(200);
  });
});
