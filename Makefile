FRONTEND_DIR=./frontend
BACKEND_DIR=./backend

install:
	cd $(FRONTEND_DIR) && bun install
	cd $(BACKEND_DIR) && bun install

dev:
	@echo "Launching frontend and backend in dev mode"
	@make -j2 frontend-dev backend-dev

build: install
	cd $(FRONTEND_DIR) && bun run build
	cd $(BACKEND_DIR) && bun run build

test:
	@make -C $(BACKEND_DIR) test
	@make -C $(FRONTEND_DIR) test

frontend-dev:
	cd $(FRONTEND_DIR) && bun run dev

backend-dev:
	cd $(BACKEND_DIR) && bun run dev

clean:
	docker-compose down -v --remove-orphans
