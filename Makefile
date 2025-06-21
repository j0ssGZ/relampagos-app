# Ruta a los servicios
FRONTEND_DIR=./frontend
BACKEND_DIR=./backend

# 🧩 Instalación de dependencias
install:
	cd $(FRONTEND_DIR) && bun install
	cd $(BACKEND_DIR) && bun install

# 🚀 Modo desarrollo (ejecuta ambos servicios en paralelo)
dev:
	@echo "🚀 Iniciando frontend y backend en modo desarrollo..."
	@make -j2 frontend-dev backend-dev

# 🚀 Modo desarrollo con Docker
dev-docker:
	docker-compose up --build

# 🛠️ Build del frontend y backend
build:
	cd $(FRONTEND_DIR) && bun run build
	cd $(BACKEND_DIR) && bun run build

# 🧼 Limpiar imágenes y contenedores de Docker
clean:
	docker-compose down -v --remove-orphans

# 🐳 Levantar sólo backend o frontend si se desea
frontend-dev:
	cd $(FRONTEND_DIR) && bun run dev

backend-dev:
	cd $(BACKEND_DIR) && bun run dev