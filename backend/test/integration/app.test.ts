import { describe, it, expect } from 'vitest';
import app from '../../src/app';

import { hc } from 'hono/client';

const client = hc(app);

describe('GET /', () => {
  it('returns hello text', async () => {
    const res = await client.get('/');
    expect(await res.text()).toBe('Hello Hono!');
  });
});
