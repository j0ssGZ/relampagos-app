import { z } from 'zod';

export const PlayerSchema = z.object({
  name: z.string(),
  games: z.number(),
  runs: z.number(),
  holdRuns: z.number(),
  birthDate: z.string(),
  team: z.string(),
  position: z.string()
});

export type Player = z.infer<typeof PlayerSchema>;
