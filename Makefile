install:
	npm ci

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-p9n:
	node bin/brain-p9n.js

publish:
	npm publish --dry-run
