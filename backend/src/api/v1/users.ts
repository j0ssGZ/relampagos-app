import { Hono } from 'hono';
import users from '../../fixtures/users.json';
import { authMiddleware } from '../../auth';

const router = new Hono();
router.use('*', authMiddleware);

router.get('/', (c) => c.json(users));

router.get('/:id', (c) => {
  const user = users.find(u => u.id === Number(c.req.param('id')));
  return user ? c.json(user) : c.json({ error: 'Not found' }, 404);
});

router.post('/', (c) => {
  const current = c.get('user') as any;
  if (current.role !== 'admin') return c.json({ error: 'Forbidden' }, 403);
  return c.json({ message: 'Not implemented' });
});

router.put('/:id', (c) => {
  const current = c.get('user') as any;
  if (current.role !== 'admin') return c.json({ error: 'Forbidden' }, 403);
  return c.json({ message: 'Not implemented' });
});

router.delete('/:id', (c) => {
  const current = c.get('user') as any;
  if (current.role !== 'admin') return c.json({ error: 'Forbidden' }, 403);
  return c.json({ message: 'Not implemented' });
});

export default router;
