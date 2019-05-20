#!/bin/bash

# testing before publish
npm run lint && npm run build

if [ $? = 0 ]; then
  # purge dist
  rm -fr dist

  export BABEL_ENV=production

  babel src --out-dir dist/npm/src --copy-files
  babel libs --out-dir dist/npm/libs --copy-files

  # keep es6 for next.js
  cp build/npm/index.js index.js

else
  echo 'Code cant be verify, plz check ~'
fi