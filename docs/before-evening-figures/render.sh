#!/bin/zsh
# Renders each figure at 2x and writes webp into public/before-evening/.
# Usage: docs/before-evening-figures/render.sh fig1-mcp-workflow:diagram-mcp-workflow:1200x600 ...
set -e
dir=${0:A:h}
out=${dir:h:h}/public/before-evening
chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
tmp=$(mktemp -d)

for spec in "$@"; do
  src=${spec%%:*}
  rest=${spec#*:}
  name=${rest%%:*}
  size=${rest#*:}
  "$chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
    --user-data-dir="$tmp/profile" --window-size=${size/x/,} \
    --screenshot="$tmp/$name.png" "file://$dir/$src.html" 2>/dev/null
  cwebp -quiet -q 90 "$tmp/$name.png" -o "$out/$name.webp"
  echo "$out/$name.webp"
done
