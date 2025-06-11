import { Hono } from 'hono';
import users from '../../fixtures/users.json';
import { authMiddleware } from '../../auth';
import { User, UserSchema } from '../../entities/user';

const router = new Hono();
router.use('*', authMiddleware);

const usersData: User[] = UserSchema.array().parse(users);

router.get('/', (c) => c.json(usersData));

router.get('/:id', (c) => {
  const user = usersData.find(u => u.id === Number(c.req.param('id')));
  return user ? c.json(user) : c.json({ error: 'Not found' }, 404);
});

router.post('/', async (c) => {
  const current = c.get('user') as any;
  if (current.role !== 'admin') return c.json({ error: 'Forbidden' }, 403);
  const data = UserSchema.parse(await c.req.json());
  return c.json({ message: 'Not implemented', user: data });
});

router.put('/:id', async (c) => {
  const current = c.get('user') as any;
  if (current.role !== 'admin') return c.json({ error: 'Forbidden' }, 403);
  const data = UserSchema.parse(await c.req.json());
  return c.json({ message: 'Not implemented', user: data });
});

router.delete('/:id', (c) => {
  const current = c.get('user') as any;
  if (current.role !== 'admin') return c.json({ error: 'Forbidden' }, 403);
  return c.json({ message: 'Not implemented' });
});

export default router;
