import { test, expect } from 'vitest';
import { app } from '../src/index';

const validBody = { username: 'admin', password: 'adminpass' };

test('login returns token for valid credentials', async () => {
  const res = await app.request('/login', {
    method: 'POST',
    body: JSON.stringify(validBody),
    headers: { 'Content-Type': 'application/json' },
  });
  expect(res.status).toBe(200);
  const data = await res.json();
  expect(data.token).toBeDefined();
});
