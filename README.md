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

> **Nota:** actualmente el backend emplea ficheros JSON en `fixtures/` para cargar los datos de prueba. Estos ficheros son temporales y se migrarán a una base de datos cuando el Sr. Arepa Power lo determine.

¡A disfrutar! ⚡

## Despliegue

El repositorio incluye un script `scripts/update.sh` que actualiza la rama `master`,
construye frontend y backend y copia los artefactos a `/var/www/html/relampagos`.
Las carpetas resultantes se denominan `frontend` y `backend` y se asignan con
permisos `www-data:www-data` (modo `755`). Además reinicia los contenedores
de Docker definidos en `docker-compose.yml`.
