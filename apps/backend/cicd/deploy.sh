#!/usr/bin/env bash
set -e

echo "DEBUG: pwd=$(pwd)"
APP_NAME="$(basename "$(dirname "$(cd "$(dirname "${0}")"; pwd)")")"
echo "DEBUG: app_name=${APP_NAME}"

yarn run nx run "${APP_NAME}:build" --prod
cp "apps/${APP_NAME}/vercel.json" "dist/apps/${APP_NAME}/"
cp package.json "dist/apps/${APP_NAME}/"
cp yarn.lock "dist/apps/${APP_NAME}/"
#cd "dist/apps/${APP_NAME}"
