#!/bin/bash

git add *;
git commit -m "Commit message"
git push

npm version patch

npm run prepubl¡sh

npm publish

npm run postpublish
