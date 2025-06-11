import { Hono } from 'hono';
import teams from '../../fixtures/teams.json';

const router = new Hono();

router.get('/', (c) => c.json(teams));

export default router;
