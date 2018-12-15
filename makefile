# Paths
main_build := webpack/webpack.main.build.ts
main_dev := webpack/webpack.main.dev.ts

renderer_center_build := webpack/center/webpack.renderer.build.js
renderer_center_dev := webpack/center/webpack.renderer.dev.js
renderer_scepter_build := webpack/scepter/webpack.renderer.build.js
renderer_scepter_dev := webpack/scepter/webpack.renderer.dev.js
renderer_execute_build := webpack/execute/webpack.renderer.build.js
renderer_execute_dev := webpack/execute/webpack.renderer.dev.js

# NPX functions
ifeq ($(OS), Windows_NT)
	tsc := .\node_modules\.bin\tsc
	mocha := .\node_modules\.bin\mocha
	webpack := .\node_modules\.bin\webpack
	webpack_dev_server := .\node_modules\.bin\webpack-dev-server
	electron_builder := ../node_modules/.bin/electron-builder
else
	tsc := node_modules/.bin/tsc
	mocha := node_modules/.bin/mocha
	webpack := node_modules/.bin/webpack
	webpack_dev_server := node_modules/.bin/webpack-dev-server
	electron_builder := ../node_modules/.bin/electron-builder
endif

main: run

run:
	@echo "[INFO] Starting center renderer development"
	@$(webpack_dev_server) --config $(renderer_center_dev)

build:
	@echo "[INFO] Starting center renderer production build"
	@$(webpack) --config $(renderer_center_build)

tests:
	@echo "[INFO] Testing with Mocha"
ifeq ($(OS), Windows_NT)
	@-setx NODE_ENV test
else
	@-export NODE_ENV=test
endif
	@$(mocha)

cov:
	@echo "[INFO] Testing with Nyc and Mocha"
ifeq ($(OS), Windows_NT)
	@-setx NODE_ENV test
else
	@-export NODE_ENV=test
endif
	@nyc $(mocha)

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
