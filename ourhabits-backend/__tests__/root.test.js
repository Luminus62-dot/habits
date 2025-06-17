const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responde con el mensaje de estado', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('✅ OurHabits API funcionando correctamente.');
  });
});
