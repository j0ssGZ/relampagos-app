import { describe, it, expect } from 'vitest';
import { PlayerSchema } from '../../src/entities/player';
import { UserSchema } from '../../src/entities/user';

describe('zod schemas', () => {
  it('validates a player object', () => {
    const result = PlayerSchema.safeParse({
      name: 'Test',
      games: 1,
      runs: 1,
      holdRuns: 0,
      birthDate: '2000-01-01',
      team: 'A',
      position: 'B'
    });
    expect(result.success).toBe(true);
  });

  it('validates a user object', () => {
    const result = UserSchema.safeParse({
      id: 1,
      username: 'u',
      password: 'p',
      role: 'admin'
    });
    expect(result.success).toBe(true);
  });
});
