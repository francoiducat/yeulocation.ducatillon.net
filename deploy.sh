#!/bin/sh

# If a command fails, then the deploy stops
set -e
# Start with a clean slate
printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"
git switch main
hugo
git branch -D gh-pages || true
git checkout --orphan gh-pages
git rm -rf .
git clean -fd
git checkout main -- public/
cp -r public/* .
git rm -rf public

# Use Vim to find and replace src="/js/ with src="myrepo/js in index.html
# vim -es -c "%s/src=\"\/js/src=\"\/myrepo\/js/g" -c ":wq" index.html

#printf "\033[0;32m Fixing /js/ urls...\033[0m\n"
# Find all .html files in the current directory and subdirectories
#find . -type f -name "*.html" | while read js; do
  # Run vim on each file to replace src="/js/ with src="/myrepo/js/
  #vim -es -c "%s/src=\"\/js/src=\"\/myrepo\/js/g" -c ":wq" "$js"
  #vim -es -c "%s/href=\"\//href=\"myrepo\//g" -c ":wq" "$href"
  # BUG with the single quote:
  #vim -es -c "%s/'\/img\//'\/myrepo\/img\//g" -c ":wq" "$img"
#done

printf "\033[0;32m Git add...\033[0m\n"
git add .
printf "\033[0;32m Git commit...\033[0m\n"
git commit -m "deploy site to github pages"
printf "\033[0;32m Git push...\033[0m\n"
git push --force origin gh-pages
git switch main
# Print success message
printf "\033[0;32mSuccessfully Deployed to GitHub Pages...\033[0m\n"
