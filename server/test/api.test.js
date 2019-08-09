

const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏'
      }, done);
  });
});

describe('POST /api/v1/messages', () => {
  it('responds with a inserted message', (done) => {
    const result = {
      name: 'AMS',
      message: 'This app is dope',
      latitude: -90,
      longitude: 180
    };
    request(app)
      .post('/api/v1/messages')
      .send(result)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, result, done);
  });
});
