import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import playersRoutes from './api/v1/players';
import matchesRoutes from "./api/public/matches";

const app = new Hono();


app.get('/', (c) => c.text('Hello Hono!'));
app.route('/api/v1/players', playersRoutes);
app.route('/api/public/matches', matchesRoutes);


console.log('⚡⚡⚡ Relampaserver is running on http://localhost:3001 ⚡⚡⚡');

serve({
  fetch: app.fetch,
  port: 3001
});