import { verify, sign } from 'jsonwebtoken';
import type { MiddlewareHandler } from 'hono';

const SECRET_KEY = 'relampagos-secret';

export const generateToken = (payload: object) => sign(payload, SECRET_KEY, { expiresIn: '1h' });

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const auth = c.req.header('Authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return c.json({ error: 'Forbidden' }, 403);
  }
  const token = auth.slice(7);
  try {
    const decoded = verify(token, SECRET_KEY);
    c.set('user', decoded);
    await next();
  } catch (err) {
    return c.json({ error: 'Forbidden' }, 403);
  }
};
