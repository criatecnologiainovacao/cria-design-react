#!/bin/bash

# testing before publish
npm run lint && npm run build

if [ $? = 0 ]; then
  # purge dist
  rm -fr dist

  # babel transform es6 into es5
  babel build/npm/index.js --out-file dist/npm/es6/index.js

  export BABEL_ENV=production

  babel src --out-dir dist/npm/es6/src --copy-files
  babel libs --out-dir dist/npm/es6/libs --copy-files
  babel build/npm/index.js --out-file dist/npm/es6/index.js

  # keep es6 for next.js
  cp build/npm/index.js index.js
else
  echo 'Code cant be verify, plz check ~'
fi
