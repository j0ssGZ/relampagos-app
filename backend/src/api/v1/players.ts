import { Hono } from 'hono';
import players from '../../fixtures/players.json';
import { authMiddleware } from '../../auth';
import { Player, PlayerSchema } from '../../entities/player';

const router = new Hono();
router.use('*', authMiddleware);

const playersData: Player[] = PlayerSchema.array().parse(players);

router.get('/', (c) => c.json(playersData));

export default router;
