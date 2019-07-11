#!/bin/bash

npm install && npm run lint && npm test && npm run build

cd themes && npm install && gulp build && cd ..

if [[ $? = 0 ]]; then

  rm -fr dist

  babel src --out-dir dist/npm/es5/src --copy-files
  babel libs --out-dir dist/npm/es5/libs --copy-files
  babel build/npm/index.js --out-file index.js

  export BABEL_ENV=production

  mkdir dist/npm/es6
  cp -rp src dist/npm/es6/src
  cp -rp libs dist/npm/es6/libs
  cp -rp build/npm/next.js dist/npm/es6/index.js

else
  echo 'Code cant be verify, plz check ~'
fi
