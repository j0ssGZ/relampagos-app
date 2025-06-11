import { Hono } from 'hono';
import players from '../../fixtures/players.json';
import { authMiddleware } from '../../auth';

const router = new Hono();
router.use('*', authMiddleware);

router.get('/', (c) => c.json(players));

export default router;
