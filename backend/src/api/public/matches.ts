import { Hono } from 'hono';
import matches from '../../fixtures/matches.json';

const router = new Hono();

router.get('/', (c) => c.json(matches));

export default router;
