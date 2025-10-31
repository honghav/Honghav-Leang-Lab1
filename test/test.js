// test/test.js
import supertest from 'supertest';
import app from '../app.js';
import * as chai from 'chai';

const { expect } = chai;
const request = supertest;

describe('GET /', () => {
  it('should return Hello, GitHub Actions!', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello, CI/CD!');
  });
});
