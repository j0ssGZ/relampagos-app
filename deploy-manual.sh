#!/bin/bash

# Script de deploy manual para el droplet
# Ejecutar en el droplet como root

echo "🚀 Iniciando deploy manual..."

# Instalar Bun si no está instalado
if ! command -v bun &> /dev/null; then
    echo "📦 Instalando Bun..."
    curl -fsSL https://bun.sh/install | bash
    export PATH="$HOME/.bun/bin:$PATH"
fi

# Crear directorios
echo "📁 Creando directorios..."
sudo mkdir -p /var/www/html/relampagos/frontend
sudo mkdir -p /var/www/html/relampagos/backend
sudo chown -R www-data:www-data /var/www/html/relampagos

# Crear archivo de configuración de nginx
echo "⚙️ Configurando nginx..."
sudo tee /etc/nginx/sites-available/relampagos > /dev/null << 'EOF'
server {
    listen 80;
    server_name relampagospontevedra.com;

    # Frontend (React app)
    location / {
        root /var/www/html/relampagos/frontend;
        try_files $uri $uri/ /index.html;

        # Headers para React Router
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }

    # API Backend
    location /api/ {
        proxy_pass http://localhost:3001/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Configuración de seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
}
EOF

# Crear archivo del servicio systemd
echo "🔧 Configurando servicio systemd..."
sudo tee /etc/systemd/system/relampagos-backend.service > /dev/null << 'EOF'
[Unit]
Description=Relampagos Backend API
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/html/relampagos/backend
ExecStart=/usr/bin/bun start
Restart=always
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=3001

[Install]
WantedBy=multi-user.target
EOF

# Crear symlink de nginx
echo "🔗 Creando symlink de nginx..."
sudo ln -sf /etc/nginx/sites-available/relampagos /etc/nginx/sites-enabled/

# Verificar configuración de nginx
echo "✅ Verificando configuración de nginx..."
sudo nginx -t

# Recargar systemd y habilitar servicio
echo "🔄 Recargando systemd..."
sudo systemctl daemon-reload
sudo systemctl enable relampagos-backend.service

# Recargar nginx
echo "🔄 Recargando nginx..."
sudo systemctl reload nginx

echo "🎉 Deploy manual completado!"
echo "📋 Próximos pasos:"
echo "1. Subir los archivos del frontend y backend"
echo "2. Instalar dependencias del backend"
echo "3. Iniciar el servicio: sudo systemctl start relampagos-backend.service"
