# @dcdavidev/eslint

A monorepo for developing ESlint configs and plugins

## Development

Install dependencies:

```bash
pnpm install
```

This command will make all scripts (\*.sh) inside the directory [scripts](./scripts) executable,
then It will build all packages as safely as possible (see [safe-build.sh](./scripts/safe-build.sh)),
so you don't have to build them individually on postinstall.

## Packages

- [eslint-plugin](./packages/eslint-plugin/README.md)

## License

[MIT License](./LICENSE)
