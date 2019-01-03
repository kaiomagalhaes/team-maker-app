# Team Maker App
The team maker app helps managers schedule and shuffle around their teams.
See the below RE-NAG docs to get started

## RE-NAG (React + Next + Apollo + Graphql) Starter

## Getting Started
  run `npm install && npm run dev`
  That's it! :D

## What this scaffold provides
RE-NAG provides initial configuration for your project
It configures:
  - React and react's supporting packages
  - Next.js for that sweet SSR
  - Styled Components that are configured to work with SSR
  - Apollo.js
  - Graphql + Graphql tag
  - jest + enzyme
  - pre-push
    - tests
    - linting
  - absolute imports from:
      - components
      - connected-components
      - lib
      - pages
      - theme
      - config

## Usage with REST Api's
  - npm install `apollo-link-rest`
  - https://www.apollographql.com/docs/link/links/rest.html

## Conventions
Each components is responsible for it's own tests and styling.
Ideally, you'd keep your query's styles and component logic in one js file, with an accompanying
test file.

A typical structure for a big component could look like:
  - MyComponent
    - __tests__
      - MyComponent.test.js
    - StyledMyComponent.js
    - index.js
    - SOME_MUTATION_NAME.js
    - SOME_QUERY_NAME.js

Where as a smaller component could look like:
  - MyComponent
    - __tests__
      - MyComponent.test.js
    - index.js

In this case, the queries, mutations, styles and logic fall within index.js

## Components
The `components` folder is specifically for components not directly connected to application state.
Buttons, links, toggles, etc

## Connected Components
The `connected-components` folder houses any component that needs to make queries or mutations, or
update the state of the application.

## Lib
The `lib` folder houses any non-application specific functionality, ideally any functions you define in this folder should be transportable to any other application you write.
This of it as a folder of your own personal node modules.

## Pages
the `pages` directory contains the base app and document configurations as well as all the pages for your applications.

Next js has routing automatically configured, so, for example, if you add login.js a route in your
application will be added at https://your-url.com/login

## Theme
Within the "src" directory you'll find theme/index.js
Here is where you'll define your theme object which will be given to the styled-components
`ThemeProvider`. This will allow you to access any of the styles at any component in your app.
