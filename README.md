<p align="center"><img src="frontend/logo.png"/></p>
<h1 align="center">Relámpagos App ⚡</h1>

Monorepo para la web y la API del equipo de sóftbol y béisbol Relámpagos Pontevedra.

## ¿Cómo empiezo?
1. `make install` - instala dependencias de frontend y backend
2. `make dev` - levanta ambos servicios en paralelo

Si prefieres Docker:
```
make dev-docker
```

Esto lanzará los dos servicios en http://localhost:3000 (frontend) y http://localhost:3001 (backend).

## Carpetas principales
- **frontend/**: sitio web en Bun + React
- **backend/**: API REST hecha con Hono

¡A disfrutar! ⚡
