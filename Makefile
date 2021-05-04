install:
	npm ci

lint:
	npx eslint .

node bin/brain-games.js

node bin/brain-even.js

npm publish --dry-run