import { Hono } from 'hono';
import matches from '../../fixtures/matches.json';
import { authMiddleware } from '../../auth';

const router = new Hono();
router.use('*', authMiddleware);

router.get('/', (c) => c.json(matches));

router.get('/:id', (c) => {
  const match = matches.find(m => m.matchId === Number(c.req.param('id')));
  return match ? c.json(match) : c.json({ error: 'Not found' }, 404);
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
