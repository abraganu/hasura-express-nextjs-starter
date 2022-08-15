

# Clinica

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Running the complete application to develop
The complete application is compose by:
- A nextjs application in the frontend
- An express service for custom logic
- A hasura application to build a graphql service. This works with docker-compose

In order to run the hole application you need to have the 3 services mentioned above. You need to first run the services created with NX running 
the next CLI command `yarn start:dev`.
Next you need to run the hasura application with the next command `docker compose up -d`.
Last, once your hasura service is running if you want to make changes on the database and create some custom logic using one of the many solution
hasura provide you will need to open the console using the next command `yan nx hasura console`
## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
