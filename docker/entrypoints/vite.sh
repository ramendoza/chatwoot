#!/bin/sh
set -x

rm -rf /app/tmp/pids/server.pid
rm -rf /app/tmp/cache/*

# Only reinstall when the lockfile changed (stamp lives in the node_modules volume)
STAMP=/app/node_modules/.pnpm-lock.sha
CURRENT=$(sha256sum /app/pnpm-lock.yaml | cut -d' ' -f1)

if [ ! -f "$STAMP" ] || [ "$(cat "$STAMP")" != "$CURRENT" ]; then
  pnpm install --frozen-lockfile && echo "$CURRENT" > "$STAMP"
fi

echo "Ready to run Vite development server."

exec "$@"
