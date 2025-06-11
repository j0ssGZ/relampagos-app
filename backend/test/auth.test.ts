import { test, expect } from 'vitest';
import { generateToken } from '../src/auth';

test('generateToken returns a jwt string', () => {
  const token = generateToken({ foo: 'bar' });
  expect(typeof token).toBe('string');
  expect(token.split('.').length).toBe(3);
});
