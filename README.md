# Frontend skeleton project

This is a skeleton project for a [Vue 2](https://vuejs.org/) web application.
It is setup using [TypeScript](https://www.typescriptlang.org/), Vuex stores,
and Vue-Router navigation.

The [Bootstrap-Vue](https://bootstrap-vue.org/) component library has been
setup and is the recommended base component library for this project.

## Configuration

### NPM configuration

In order to install some private dependencies, you will need to create a `.npmrc` file
with an access token to Keybas' private NPM registry.

### Project configuration

This project is configured through environment variables. They should be set either
in the external environment (from command-line, docker...) or in the `.env` file when
it is more practical to do so.

All required variables are listed in the `.env.example` file. In code, they are
declared in the `src/services/env.ts` file, that you can refer to for reference,
and that you can update to add your own variables when required.

Do **not** store secrets in the project's environment variables.

## Development

### Workflow

We recommend you to work using branches and merge requests, in order to avoid committing too
often to the `main` branch and running useless pipelines too often (like the `publish` job).

Merge requests also allow you to check validity (everything compiles), test coverage,
code quality and style, prior to merging in the main branch, which is often good to ensure
quality stays consistent at all times. They also help when several people are working at
the same time on a given project, to be able to work in isolation on their separate issues
or user stories, and thus reducing conflicts.

### Commands

Useful NPM scripts on this project:

```sh
# Lint all files
npm run lint

# Run in development mode with hot-reloads
npm run serve

# Run unit tests in `tests/unit`
npm run test
```

### Project structure

```text
public/       Files that will be served alongside your app.
              For instance, public/favicon.ico will be served as GET /favicon.ico.

src/
  assets/     Files that are served by Vue. Files in this directory are
              base64-encoded into the JS bundle, and it is advised to use
              this directory as little as possible.
  components/ All Vue single-file components (SFCs) used in this app.
  router/     Declaration of routes for Vue-Router.
  services/   Everything that should be abstracted from the stores, views and components.
  store/      All Vuex data stores are declared as modules in this directory.
  style/      (S)CSS files for styles that should not be scoped to a given component.
  views/      Definition of views for the routes declared in router/.
```

## Testing

The test runner and assertion library is [Jest](https://jestjs.io/fr/),
setup with the [Vue Test Utils](https://vue-test-utils.vuejs.org/guides/#getting-started).
Tests are located in the `tests/unit` directory.

Organization of tests in this repository is free-form. For instance, you may
follow this structure:

```
test/
  fixtures/ Utilities specifically used to generate or inject test data.
  helpers/  General testing utilities.
  unit/     Unit tests for components, services, stores...
```

For more details on how to write tests, see examples and the Vue Test Utils'
documentation.

## Deployment

### Manual

You need to:

- Clone this repository
- Create a `.npmrc` file and configure an access token to Keybas' private NPM registry
- Run `npm ci` to install required dependencies
- Create a `.env` file and configure all environment variables

Then you will be able to run the following command to build the project:

```sh
npm run build
```

In order to serve the built project, you will need to serve the `dist` folder
generated at build time. For instance with Python:

```sh
cd dist
# or python3 instead of python
python -m http.server
```

### With Docker

There is a Gitlab CI job configured that publishes a Docker image in the
private container registry for this project. This job is run every time a
commit is pushed/merged onto the `main` branch.

It is possible to pull and run this image locally or on a server, after
authenticating with `docker login`. You can also generate this image
locally with `docker build .` after cloning the repository.

It is recommended to use docker-compose to run this project, since you may
depend on other services. Also, docker-compose helps with setting up
environment variables for the container.

## Related documentation

### Installed CLI Plugins

- [babel](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel)
- [pwa](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa)
- [router](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router)
- [vuex](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex)
- [eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint)
- [unit-jest](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest)
- [e2e-nightwatch](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch)
- [typescript](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript)

### Recommended documentation

- [Vue CLI's configuration reference](https://cli.vuejs.org/config/)
- [Vue-Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/guide/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [BootstrapVue](https://bootstrap-vue.org/docs/components)
- [Vue Test Utils](https://vue-test-utils.vuejs.org/guides/#getting-started)

### Recommended tooling

- [Vue Devtools](https://devtools.vuejs.org/)
- If using VSCode, the following extensions:
  - Recommended: `Vetur`, `ESLint`, `Prettier`
  - Nice to have: `npm`, `npm Intellisense`, `i18n ally`, `markdownlint`, `axe Accessibility Linter`
