

# Starter Project

This project was generated using [Nx](https://nx.dev).
Visit the [Nx Documentation](https://nx.dev) to learn more.

## Technologies, libraries and frameworks use in the project
- NX for managing the project in a monorepo style and shared libraries.  [Nx Documentation](https://nx.dev)
- Next/Typescript for the frontend. [Next Documentation](https://nextjs.org/docs/getting-started)
- Hasura to help build a graphql service and managing the db and real time subscriptions. [Hasura Documentation](https://hasura.io/docs/latest/index/)
- Node/Express/Typescript service to handle custom logic.
- Apollo Client. [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- Cypress for e2e testing. [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)
- Storybook for manual testing. [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- Postgresql.

TODO:
- Add prisma to query the db in the Node/Express service. [Prisma Documentation](https://www.prisma.io/docs)
- Authentication hasura-auth?, Cognito?, Auth0?
- Deployment process
## Running the app
The complete application is compose by:
- A nextjs application in the frontend
- An express service for custom logic
- A hasura application to build a graphql service. This works with docker-compose

In order to run the whole application you need to have the 3 services mentioned above.

- You need to first run the api and the hasura engine that will expose a grapqhl service. Also this will run a graphql code generator and the hasura console (use to manage the database from a UI)
```bash
yarn dev:api
```
- To run the frontend you need to open a new terminal window/tab and run the next command
```bash
yarn dev:web
```

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## TODO
- Add information on where to add each Page/Module/Endpoint/Component in the project and how to use the NX generator to achieve this.
- Add commands to run tests. e2e, storybook, react tests (right now this could be accomplish using nx cli commands)
