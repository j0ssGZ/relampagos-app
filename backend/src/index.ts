import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import playersRoutes from './api/v1/players';
import usersRoutes from './api/v1/users';
import teamsRoutes from './api/v1/teams';
import matchesRoutes from './api/v1/matches';
import loginRoute from './api/login';
import publicMatches from './api/public/matches';
import publicTeams from './api/public/teams';

const app = new Hono();

app.get('/', (c) => c.text('Hello Hono!'));
app.route('/login', loginRoute);
app.route('/api/v1/players', playersRoutes);
app.route('/api/v1/users', usersRoutes);
app.route('/api/v1/teams', teamsRoutes);
app.route('/api/v1/matches', matchesRoutes);
app.route('/api/v1/public/matches', publicMatches);
app.route('/api/v1/public/teams', publicTeams);

console.log('⚡⚡⚡ Relampaserver is running on http://localhost:3001 ⚡⚡⚡');

serve({
  fetch: app.fetch,
  port: 3001
});
