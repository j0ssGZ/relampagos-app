import { Hono } from 'hono';
import players from '../../fixtures/players.json';

const router = new Hono();

router.get('/', (c) => c.json(players));

export default router;