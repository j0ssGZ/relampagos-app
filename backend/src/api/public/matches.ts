import { Hono } from 'hono';
import players from '../../fixtures/matches.json';

const router = new Hono();

router.get('/', (c) => c.json(players));

export default router;