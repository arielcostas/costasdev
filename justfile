# https://just.systems

default:
    just --list

dev:
    npm run dev

build:
    npm run build

upgrade-deps:
    npx npm-check-updates --peer -u

upgrade-astro:
    npx @astrojs/upgrade -y
