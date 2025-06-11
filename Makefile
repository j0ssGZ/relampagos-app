# Ruta a los servicios
FRONTEND_DIR=./frontend
BACKEND_DIR=./backend

# 🌩 Instalación de dependencias
install:
	$(MAKE) -C $(FRONTEND_DIR) install
	$(MAKE) -C $(BACKEND_DIR) install

# 🚀 Modo desarrollo (ejecuta ambos servicios en paralelo)
dev: install
	@echo "🚀 Iniciando frontend y backend en modo desarrollo..."
	$(MAKE) -j2 frontend-dev backend-dev

# 🚀 Modo desarrollo con Docker
dev-docker:
	docker-compose up --build

# 🔧 Build del frontend y backend
build: install
	$(MAKE) frontend-build
	$(MAKE) backend-build

test: test-unit test-integration

test-unit:
	$(MAKE) frontend-test-unit
	$(MAKE) backend-test-unit

test-integration:
	$(MAKE) frontend-test-integration
	$(MAKE) backend-test-integration

# 🧼 Limpiar imágenes y contenedores de Docker
clean:
	docker-compose down -v --remove-orphans

# 🐳 Levantar sólo backend o frontend si se desea
frontend-dev:
	$(MAKE) -C $(FRONTEND_DIR) dev

backend-dev:
	$(MAKE) -C $(BACKEND_DIR) dev

frontend-build:
	$(MAKE) -C $(FRONTEND_DIR) build

backend-build:
	$(MAKE) -C $(BACKEND_DIR) build

frontend-test:
	$(MAKE) -C $(FRONTEND_DIR) test

backend-test:
	$(MAKE) -C $(BACKEND_DIR) test

backend-test-unit:
	$(MAKE) -C $(BACKEND_DIR) test-unit

backend-test-integration:
	$(MAKE) -C $(BACKEND_DIR) test-integration

frontend-test-unit:
	$(MAKE) -C $(FRONTEND_DIR) test-unit

frontend-test-integration:
	$(MAKE) -C $(FRONTEND_DIR) test-integration
