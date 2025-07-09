import { Hono } from 'hono';
import { FilePlayerRepository } from '../../contexts/players/infra/repositories/FilePlayerRepository';
import { GetAllPlayersUseCase } from '../../contexts/players/application/GetAllPlayersUseCase';

const router = new Hono();
const playerRepository = new FilePlayerRepository();
const getAllPlayersUseCase = new GetAllPlayersUseCase(playerRepository);

router.get('/', async (c) => {
  const players = await getAllPlayersUseCase.execute();
  return c.json(players);
});

export default router;
