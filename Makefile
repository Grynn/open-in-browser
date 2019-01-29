.PHONY: start

all: node_modules
	@echo "make publish to publish :)"
	@echo "node bin/open.js someurl to test"

publish: node_modules
	npx np

node_modules: package-lock.json
	npm install
	touch node_modules