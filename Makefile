.PHONY: all publish lint

all: node_modules lint
	@echo "make publish to publish :)"
	@echo "node bin/open.js someurl to test"

publish: node_modules lint
	npx np

lint:
	npx eslint bin

node_modules: package-lock.json package.json
	npm install
	touch node_modules
