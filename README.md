> Minimal no-framework monorepo template built with Vite and React

## Features

✔️ &nbsp;**Hybrid application:** Choose rendering method (SSG, SSR, SPA) based on routes

✔️ &nbsp;**API support:** Optional file-system routing support for API endpoints

✔️ &nbsp;**No framework:** React knowledge is enough to use this template

✔️ &nbsp;**SEO:** SEO tags included for SSR and SSG

✔️ &nbsp;**Compatible:** Build produces separate folders for client-side, server-side, and API. Highly compatible with hosting providers.

✔️ &nbsp;**HMR:** Hot module replacement support for all apps (SSR, SSG, SPA, API)

✔️ &nbsp;**Typescript:** Built-in TypeScript support

✔️ &nbsp;**Jest:** Built-in Jest support

## Getting started

This is a starter template for building applications with Vite and React. Click `use this template` and start working right away.

## Development

```
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm run dev
```

This will spawn an Express server that serves your application. Built-in Hot Module Replacement (HMR) support.

## How it works? 

In the local environment, [src/entry-server.tsx](./src/entry-server.tsx) is the entry point for the application. It uses 
`react-router` to understand what page to render. If the route exports a `fetchData` method, the component will be server-side-rendered. 
Otherwise, it will be client-side rendered. Data returned by `fetchData` will be made available to the component by [React Context](./src/context.ts).

See [src/pages/ssr.tsx](./src/pages/ssr.tsx) for an example.

## Static site generator

You can define which routes to prerender by modifying the [src/prerender.ts](./src/prerender.ts) file. During build time, the builder will be make a 
request to each route exported by this file and will take a snapshot of the HTML document.

## Single page app

By default, every route is a single-page application.

## API

The [src/api/](./src/api/) directory contains functions that act as API. The path to the file and the file name is used to determine the endpoint. 
The API is comptabile with [Stormkit](https://www.stormkit.io). [Check the docs](https://www.stormkit.io/docs/features/writing-api) for more information.

If you need to host the API elsewhere, you'll need to change the [vite.config.api.ts](./vite.config.api.ts) file and create a bundle from it. You may
also need to write an entry point that calls the appropriate function based on the route.

## Test

Jest is already preconfigured to work with this repository. Simply run:

```bash
$ npm run test
$ yarn test
$ pnpm run test
```

to execute all tests. You can add the `--watch` flag to keep listening to changes while testing:

```bash
$ npm run test -- --watch
$ yarn test --watch
$ pnpm run test --watch
```

## Setting Up Login Credentials

To use the login functionality, you need to set up the username and password which the system will use to authenticate users. Follow the steps below:

1. **Environment Variables**: For security purposes, it's recommended to store sensitive data such as usernames and passwords in environment variables.
   
   - Create a `.env` file in the root of your project (if it doesn't already exist).
   - Add the username and password in the `.env` file as shown below:
     ```
     REACT_APP_ADMIN_USERNAME=<your_username>
     REACT_APP_ADMIN_PASSWORD=<your_password>
     ```
     
2. **Updating the Login Code**: In your `login.tsx` file, which contains the `LoginForm` component, the `handleSubmit` function will handle the authentication. Make sure to compare the entered credentials with the ones from the environment variables to authenticate users. Modify the `handleSubmit` function accordingly.

3. **Protecting Sensitive Data**: Ensure your `.env` file is listed in your `.gitignore` so that it's not committed to your version control. This protects your sensitive data.

4. **Accessing the Login Route**: Navigate to the route that renders the `LoginForm` component in your browser. Here, you can input the credentials set in the `.env` file to test the login functionality.


## Community

Here's a curated list of websites using this framework. Please feel free to add your own:

| Site name | Description | 
| --------- | ----------- |
| [Stormkit.io](https://www.stormkit.io) | Deploy full stack javascript applications on the cloud | 
| [Feez.ws](https://www.feez.ws) | Track your progress in public | 

## License

MIT
