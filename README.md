# Frontend skeleton project

This is a skeleton project for a [Vue 2](https://vuejs.org/) web application.
It is setup using [TypeScript](https://www.typescriptlang.org/), Pinia stores,
and Vue-Router navigation.

The [Bootstrap-Vue](https://bootstrap-vue.org/) component library has been
setup and is the recommended base component library for this project.

## Table of contents

- [Frontend skeleton project](#frontend-skeleton-project)
  - [Table of contents](#table-of-contents)
  - [Configuration](#configuration)
    - [NPM configuration](#npm-configuration)
    - [Project configuration](#project-configuration)
  - [Development](#development)
    - [Workflow](#workflow)
    - [Commands](#commands)
    - [Project structure](#project-structure)
    - [Stores and services](#stores-and-services)
    - [Keeping the documentation up-to-date](#keeping-the-documentation-up-to-date)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Troubleshooting](#troubleshooting)
  - [Related documentation](#related-documentation)
    - [Installed CLI Plugins](#installed-cli-plugins)
    - [Recommended documentation](#recommended-documentation)
    - [Recommended tooling](#recommended-tooling)

## Configuration

### NPM configuration

In order to install some private dependencies, you will need to create a `.npmrc` file
with an access token to Keybas' private NPM registry.

### Project configuration

This project is configured through environment variables. They should be set either
in the external environment (from command-line, docker...) or in the `.env` file when
it is more practical to do so.

All required variables are listed in the [`.env.example` file](deploy/.env.example).
In code, they are declared in the [`src/services/env.ts` file](src/services/env.ts),
that you can refer to for reference, and that you can update to add your own variables
when required.

Do **not** store secrets in the project's environment variables.

## Development

This project has been configured for Node.js v16 (LTS) and NPM 8. If you're often
working with other projects, you can install `nvm`
([Linux version](https://github.com/nvm-sh/nvm),
[Windows version](https://github.com/coreybutler/nvm-windows)) to help change
Node versions quickly and often.

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
  store/      All data stores are declared as modules in this directory.
  style/      (S)CSS files for styles that should not be scoped to a given component.
  views/      Definition of views for the routes declared in router/.
```

### Stores and services

Stores have been setup with [Pinia](https://pinia.vuejs.org/) and
[Vueuse](https://vueuse.org/) that are forward-compatible with Vue 3.
This will ease any future migration.

### Keeping the documentation up-to-date

This project and its artifacts are not used solely by its developers, but also by
sysadmins, security analysts, QA engineers, other developers, and a bunch of other
professions. They expect that the documentation is kept up-to-date, in particular:

- [This README](./README.md)
- Most importantly, the deployment documentation:
  - The [deploy/README.md](deploy/README.md) explaining how to run the project
  - The [deploy/.env.example](deploy/.env.example) file that documents all
    environment variables required to run this project (with or without Docker)
  - The [deploy/docker-compose.yml](deploy/docker-compose.yml) file that documents
    all the third-party services and their configuration

## Testing

The test runner and assertion library is [Jest](https://jestjs.io/fr/),
setup with the [Vue Test Utils](https://vue-test-utils.vuejs.org/guides/#getting-started).
Tests are located in the `tests/unit` directory.

If you're familiar with these, you can also use the
[Vue Testing Library](https://github.com/testing-library/vue-testing-library) and/or its
[custom Jest matchers](https://github.com/testing-library/jest-dom).

Organization of tests in this repository is free-form. For instance, you may
follow this structure:

```text
test/
  fixtures/ Utilities specifically used to generate or inject test data.
  helpers/  General testing utilities.
  unit/     Unit tests for components, services, stores...
```

For more details on how to write tests, please refer to examples in this project and to
the Vue Test Utils' documentation (or the Vue Testing Library if you're using it instead).

## Deployment

The easiest way to get this project up and running on a server or on your computer
is using [Docker](https://www.docker.com/).

For more details on how to deploy, see [deploy/README.md](deploy/README.md);

## Troubleshooting

If you're running into an issue with this project, please check the troubleshooting
section in [deploy/README.md](deploy/README.md#troubleshooting).

## Related documentation

### Installed CLI Plugins

- [babel](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel)
- [pwa](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa)
- [router](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router)
- [eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint)
- [unit-jest](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest)
- [e2e-nightwatch](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch)
- [typescript](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript)

### Recommended documentation

- [Vue CLI's configuration reference](https://cli.vuejs.org/config/)
- [Vue-Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vueuse](https://vueuse.org/)
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Bootstrap-Vue](https://bootstrap-vue.org/docs/components)
- [Vue Test Utils](https://vue-test-utils.vuejs.org/guides/#getting-started)

### Recommended tooling

- [Vue Devtools](https://devtools.vuejs.org/)
- If using VSCode, the following extensions:
  - Recommended: `Vetur`, `ESLint`, `Prettier`
  - Nice to have: `npm`, `npm Intellisense`, `i18n ally`, `markdownlint`, `axe Accessibility Linter`
