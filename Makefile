FRONTEND_DIR=./frontend
BACKEND_DIR=./backend

install:
	cd $(FRONTEND_DIR) && bun install
	cd $(BACKEND_DIR) && bun install

dev:
	@echo "🚀 Iniciando frontend y backend en modo desarrollo..."
	@make -j2 frontend-dev backend-dev

dev-docker:
	docker-compose up --build

build:
	cd $(FRONTEND_DIR) && bun run build
	cd $(BACKEND_DIR) && bun run build

clean:
	docker-compose down -v --remove-orphans

frontend-dev:
	cd $(FRONTEND_DIR) && bun run dev

backend-dev:
	cd $(BACKEND_DIR) && bun run dev
