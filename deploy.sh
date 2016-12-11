#!/bin/sh

set -x

npm run build

git checkout -B gh-pages
git add -f build
cp -r img build/
git commit -am "Rebuild website"
git filter-branch -f --prune-empty --subdirectory-filter build
git push -f origin gh-pages
git checkout -
