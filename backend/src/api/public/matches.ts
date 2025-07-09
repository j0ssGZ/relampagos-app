import { Hono } from 'hono';
import { GetAllMatches } from '../../contexts/matchs/application/GetAllMatches';
import { FileMatchRepository } from '../../contexts/matchs/infra/repositories/FileMatchRepository';

const router = new Hono();
const matchRepository = new FileMatchRepository();
const getAllMatches = new GetAllMatches(matchRepository);

router.get('/', async (c) => {
  const matches = await getAllMatches.execute();
  return c.json(matches);
});

export default router;
