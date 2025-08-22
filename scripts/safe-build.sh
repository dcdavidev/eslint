#!/bin/sh
set -eu

# 1. Backup all eslint.config.mjs -> eslint.config.mjs.bak
find . -type f -name "eslint.config.mjs" | while IFS= read -r file; do
  mv "$file" "$file.bak"
done

# 2. Run the nx build
nx run-many -t build

# 3. Restore backups -> back to eslint.config.mjs
find . -type f -name "eslint.config.mjs.bak" | while IFS= read -r file; do
  orig="${file%.bak}"
  mv "$file" "$orig"
done
