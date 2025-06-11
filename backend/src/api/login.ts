import { Hono } from 'hono';
import users from '../fixtures/users.json';
import { generateToken } from '../auth';

const router = new Hono();

router.post('/', async (c) => {
  const body = await c.req.json();
  const user = users.find(u => u.username === body.username && u.password === body.password);
  if (!user) {
    return c.json({ error: 'Invalid credentials' }, 401);
  }
  const token = generateToken({ id: user.id, role: user.role });
  return c.json({ token });
});

export default router;
