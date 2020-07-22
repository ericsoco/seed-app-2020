# Seed App 2020

Starter React/Redux app w/ basic runtime and build tooling:

- React Router (router)
- Styled Components (styling)
- Parcel (bundler)
- Eslint (linter)
- Prettier (code formatter)
- Husky (commit hooks)
- Volta (toolchain manager)

## Installing

[Install Volta](https://docs.volta.sh/guide/getting-started) if you haven't already:

```
curl https://get.volta.sh | bash
```

Once Volta is installed and running in your terminal (you may need to open a new session), it will automatically switch to the `node` and `yarn` versions required by the project (per `package.json::volta`).

Then, install dependencies:

```
yarn
```

## Running locally

```
yarn start
```

## Building + deploying (Github Pages)

Modify `BASE_PATH` in `.env` to specify the base path at which the application will be hosted. This is typically simply `/`, when deploying an app to a custom host. For e.g. Github Pages, however, an app will be hosted at a URL like `https://<username>.github.io/<reponame>/`, so `BASE_PATH` must be set to `<reponame>`.

Once `BASE_PATH` is set, to deploy to Github Pages:

```
yarn deploy
```
