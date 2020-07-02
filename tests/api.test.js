const request = require('supertest');

let api = require('../api');
const db = require('../db');

describe('API Tests', function () {
  it('checks that the API is working', async () => {
    const res = await request(api)
      .get('/api')
      .expect('Content-Type', /json/)
      .expect(200);
    const response = res.body;
    expect(response.message).toBe('API is working !');
  });
});

afterAll(async (done) => {
  db.connection.close();
  done();
});
