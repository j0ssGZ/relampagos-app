#!/bin/bash
set -e

# Carpeta del repositorio
REPO_DIR="/var/www/html/relampagos"

cd "$REPO_DIR" || exit 1

# Obtener la última versión de master
git fetch origin
git reset --hard origin/master

# Construir frontend y backend
make build

# Directorios de despliegue
FRONTEND_TARGET="/var/www/html/relampagos/frontend"
BACKEND_TARGET="/var/www/html/relampagos/backend"

mkdir -p "$FRONTEND_TARGET" "$BACKEND_TARGET"

# Copiar artefactos de build
rsync -a --delete "$REPO_DIR/frontend/dist/" "$FRONTEND_TARGET/"
rsync -a --delete "$REPO_DIR/backend/dist/" "$BACKEND_TARGET/"

# Ajustar permisos
chown -R www-data:www-data "$FRONTEND_TARGET" "$BACKEND_TARGET"
chmod -R 755 "$FRONTEND_TARGET" "$BACKEND_TARGET"

# Reiniciar contenedores Docker
if [ -f docker-compose.yml ]; then
    docker-compose down -v --remove-orphans
    docker-compose up --build -d
fi
