install:
	npm ci

lint:
	npx eslint .

node bin/brain-games.js 

npm publish --dry-run