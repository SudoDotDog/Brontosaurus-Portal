# Paths
webpack_build := webpack/webpack.config.js
webpack_dev := webpack/webpack.dev.js

# NPX functions
tsc := node_modules/.bin/tsc
webpack := node_modules/.bin/webpack
webpack_dev_server := node_modules/.bin/webpack-dev-server
mocha := node_modules/.bin/mocha

main: run

run:
	@echo "[INFO] Starting development"
	@NODE_ENV=development TEST_SERVER_PATH=$(TSP) $(webpack_dev_server) --config $(webpack_dev) --open

build:
	@echo "[INFO] Starting build"
	@NODE_ENV=production $(webpack) --config $(webpack_build)

tests:
	@echo "[INFO] Testing with Mocha"
	@NODE_ENV=test $(mocha)

cov:
	@echo "[INFO] Testing with Nyc and Mocha"
	@NODE_ENV=test \
	nyc $(mocha)

install:
	@echo "[INFO] Installing dev Dependencies"
	@yarn install --production=false

install-prod:
	@echo "[INFO] Installing Dependencies"
	@yarn install --production=true

clean:
ifeq ($(OS), Windows_NT)
	@echo "[INFO] Skipping"
else
	@echo "[INFO] Cleaning dist files"
	@rm -rf dist
	@rm -rf .nyc_output
	@rm -rf coverage
endif
