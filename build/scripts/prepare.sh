#!/bin/bash

# testing before publish
npm run lint && npm run build

cd themes

gulp build

cd ..

if [ $? = 0 ]; then
  # purge dist
  rm -fr dist

  export BABEL_ENV=production

else
  echo 'Code cant be verify, plz check ~'
fi
