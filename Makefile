.PHONY: all publish lint test

all: test
	@echo "make publish to publish :)"
	@echo "node bin/open.js someurl to test manually"

publish: node_modules lint
	npx np

lint:
	npx eslint bin

node_modules: package-lock.json package.json
	npm install
	touch node_modules

test: node_modules lint
	npm test
