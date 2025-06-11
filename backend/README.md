<p align="center"><img src="../frontend/logo.png"/></p>
<h1 align="center">Relámpagos Backend</h1>

API construida con [Hono](https://hono.dev/) y ejecutada con Bun. Los datos se leen de ficheros JSON en `fixtures/` y la autenticación se basa en tokens JWT.
> **Aviso:** las fixtures se usan solo de forma temporal. Cuando el Sr. Arepa Power lo decida, toda la información se migrará a una base de datos.

## Desarrollo rápido
1. `bun install`
2. `bun run dev`

La API quedará disponible en `http://localhost:3001`.

## Endpoints principales
Todos los endpoints bajo `/api/v1` (excepto `/public`) requieren enviar un Bearer token.

- `POST /login` -> devuelve un token JWT
- `GET /api/v1/players`
- `GET /api/v1/teams`
- `GET /api/v1/matches`
- Endpoints públicos sin auth en `/api/v1/public/*`

Los métodos de escritura (`POST`, `PUT`, `DELETE`) están stubbed y requieren rol de `admin`.

## Build y producción
- `bun run build` compila a JS en `dist/`
- `bun run start` ejecuta la versión compilada

