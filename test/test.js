const request = require('supertest');
const app = require('../index'); // make sure index.js exports the app
const assert = require('assert');

describe('GET /', () => {
  it('should return Hello World!', async () => {
    const res = await request(app).get('/');
    if (res.statusCode !== 200) throw new Error('Status not 200');
    if (res.text !== 'Hello World!') throw new Error('Unexpected response body');
  });
});


// NEW: health check test
describe('GET /health', () => {
  it('should return ok status', async () => {
    const res = await request(app).get('/health');
    assert.strictEqual(res.statusCode, 200);
    assert.deepStrictEqual(res.body, { status: 'ok' });
  });
});
