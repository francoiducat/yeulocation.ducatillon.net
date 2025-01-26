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
# Use Vim to find and replace src="/js with src="repo/js in index.html
# vim -es -c "%s/src=\"\/js/src=\"\/yeulocation.ducatillon.net\/js/g" -c ":wq" index.html

# Find all .html files in the current directory and subdirectories
find . -type f -name "*.html" | while read file; do
  # Run vim on each file to replace src="/js/ with src="/repo/js/
  vim -es -c "%s/src=\"\/js/src=\"\/yeulocation.ducatillon.net\/js/g" -c ":wq" "$file"
done

git add .
git commit -m "deploy site to github pages"
git push --force origin gh-pages
git switch main
# Print success message
printf "\033[0;32mSuccessfully Deployed to GitHub Pages...\033[0m\n"
