# Website-BoilerPlate-Dom

This is a starter boilerplate for my web apps using the following technologies.

## Frontend - Web Folder
The following are the technologies used on the frontend and their purpose in the project.

### Technologies
* **Next.js:** Frontend framework
  * [Folder Routing](https://nextjs.org/docs/routing/introduction)
  * [Env variables support](https://nextjs.org/docs/api-reference/next.config.js/environment-variables) 
  * [Pre-rendering Options](https://nextjs.org/docs/basic-features/pages#pre-rendering)
    * Static Generation (recommended)
    * Server-Side-Rendering (SSR)
    * Client-Side-Rendering (CSR)
  * [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization)
  * [Image Opmization](https://nextjs.org/docs/basic-features/image-optimization)
  * Babel
    * [ES6 Features and more](https://nextjs.org/docs/basic-features/supported-browsers-features#javascript-language-features)
    * ```.babelrc``` config file for babel
  * Webpack
    * Code-splitting
  * Hot reload support (Don't need nodemon)
  * CI/CD support when hosted with Vercel
* **Styled Components:** Handles styling for the project
  * Alternative to React JSX and Next.js css modules
  * Supports SaSS, dynamic styling, autogenerates unique class names for styles, componentized styles
  * Also handles theme colors for the project using
* **Material UI:** UI Component library 
  * Uses theme from styled components for the components
  * ```materialTheme.js``` holds the theme config for material-ui components
* **FontAwsome Icons for React:** Icon library
  * The main provider for icons throughout the webapp  
* **Axios:** Promise based HTTP client
  *  Supports making HTTP requests asynchronously with async/await
* **ESLint + Prettier Configuration:** Auto fixes coding errors with ESLint and enforces uniform code styling with prettier
  * ESLint: Checks for best practices in JS,JSX, & React
    * ```.eslintrc``` config file for eslint rules
  * Prettier: Keeps the projects code format consistent by autofixing code to follow set rules
    * ```.prettierignore``` to ignore certain files and folders completely from prettier rules
  * Can be integrated with VSCode to enable formatting on save
  * ESLint configuration and VS Code settings by [Wesbos](https://github.com/wesbos/eslint-config-wesbos)
  * [Info on what ESLint-Plugin-Prettier & ESLint-Config-Prettier do](https://stackoverflow.com/a/44690309), [eslint-plugin-prettier repo](https://github.com/prettier/eslint-plugin-prettier), [eslint-config-prettier repo](https://github.com/prettier/eslint-config-prettier)
 * [**Moment.js**](https://momentjs.com/): date and time library
   * Overall makes working with dates in JS easier
   * Provides a large API for parsing, validating, manipulating, and formatting date/time

## Backend - API Folder
The following are the technologies used on the backend and their purpose in the project.

### Technologies
* TypeScript
* **Node.js/Express:** Backend Framework
  * Creates routes for API
* **MongoDB/Mongoose(Typegoose):** NoSQL Database
  * MongoDB sets up the database
  * Mongoose is a tool to work with MongoDB and supports async/await
* **Passport.js:** Authentication
  * Username/Password (Local Strategy)
  * Google Authentication Strategy
* **Helmet.js**: API Security
* **dotenv**
  * Loads environment variables from ```.env``` file into process.env
* **Nodemon**
  *  Auto restarts the backend when files are modified
* [**Moment.js**](https://momentjs.com/): date and time library
   * Overall makes working with dates in JS easier
   * Provides a large API for parsing, validating, manipulating, and formatting date/time

## How to run this project

## Todo
* [**Jest, Mocha, or Jasmine for testing framework**](https://medium.com/welldone-software/an-overview-of-javascript-testing-7ce7298b9870)
  * Jest:
    * Built by react. Therefore best integration with react frontend
    * Requires extra setup/dependencies to work well in the backend
    * Built in assertion, spies, and mocks support
    * Built in code coverage tool
  * Mocha:
    * Built for node. Good for the frontend and backend
    * Requires the most dependencies and setup work, but in this case is the most flexible
    * Usually paired with Chai for assertion & Sinon for spies, stubs, and mocks
  * Jasmine:
    *  Good integration with angular.
    *  Very mature framework
* **Morgan:** HTTP request logger middleware for node.js
  * Purpose?
  * Specific use cases?
  * Implementaion complexities?
* **Docker**
  * Purpose?
  * Specific use cases?
  * Implementaion complexities?
* **Github Actions or CircleCI**: CI/CD solution
  * CircleCI more mature. More features and analytics
  * Github Actions easier integration with github repos and simplifies # of diff 3rd party solutions to work with by housing CI/CD in the same place as the github repo
* Look more into security
  * [Securing Express API](https://dev.to/meddy672/securing-an-express-application-43m1)
  * [Security Lessons & hackable website for practice](https://github.com/WebGoat/WebGoat)
  * [NoSQL Injection. Mongodb](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/05.6-Testing_for_NoSQL_Injection)
* Socket-io: For two-way real-time communication
   

 
