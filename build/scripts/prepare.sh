#!/bin/bash

# testing before publish

npm install && npm run lint && npm test && npm run build

cd themes && npm install && gulp build && cd ..

if [[ $? = 0 ]]; then
  # purge dist
  rm -fr dist

  # babel transform es6 into es5
  babel src --out-dir dist/npm/es5/src --copy-files
  babel libs --out-dir dist/npm/es5/libs --copy-files
  cp -rp themes dist/npm/es5/themes
  babel build/npm/index.js --out-file dist/npm/es5/index.js

  export BABEL_ENV=production

  babel src --out-dir dist/npm/es6/src --copy-files
  babel libs --out-dir dist/npm/es6/libs --copy-files
  cp -rp themes  dist/npm/es6/themes

else
  echo 'Code cant be verify, plz check ~'
fi
