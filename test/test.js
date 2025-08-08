const request = require('supertest');
const app = require('../index'); // make sure index.js exports the app

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const res = await request(app).get('/');
    if (res.statusCode !== 200) throw new Error('Status not 200');
    if (res.text !== 'Hello World!') throw new Error('Unexpected response body');
  });
});
