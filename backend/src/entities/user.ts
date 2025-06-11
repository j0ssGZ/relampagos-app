import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string(),
  role: z.enum(['admin', 'user'])
});

export type User = z.infer<typeof UserSchema>;
