# Relámpagos Backend

API construida con [Hono](https://hono.dev/) y ejecutada con Bun. Los datos se leen de ficheros JSON en `fixtures/` y la autenticación se basa en tokens JWT.

## Desarrollo rápido
1. `bun install`
2. `bun run dev`

La API quedará disponible en `http://localhost:3001`.

## Endpoints principales
- `POST /login` -> devuelve un token JWT
- `GET /api/v1/players` (requiere Bearer token)
- `GET /api/v1/teams` (requiere Bearer token)
- `GET /api/v1/matches` (requiere Bearer token)
- Endpoints públicos sin auth en `/api/v1/public/*`

Los métodos de escritura (`POST`, `PUT`, `DELETE`) están stubbed y requieren rol de `admin`.

## Build y producción
- `bun run build` compila a JS en `dist/`
- `bun run start` ejecuta la versión compilada

