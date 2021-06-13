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
  * Their is a packaage solely for connecting with React. And other packages modularized for what types of icons you want (Brands, Solid, Outline, ...).
* **Axios:** Promise based HTTP client
  *  Supports making HTTP requests asynchronously with async/await
* **ESLint + Prettier Configuration:** Auto fixes coding errors with ESLint and enforces uniform code styling with prettier
  * ESLint: Checks for best practices in JS,JSX, & React
    * ```.eslintrc``` config file for eslint rules
  * Prettier: Keeps the projects code format consistent by autofixing code to follow set rules
    * ```.prettierignore``` to ignore certain files and folders completely from prettier rules
  * Can be integrated with VSCode to enable formatting on save
  * ESLint configuration and VS Code settings by [Wesbos](https://github.com/wesbos/eslint-config-wesbos)
    * Config slightly changed to ignore JSX rules as this boilerplate mainly uses styled-components for styling.
  * [Info on what ESLint-Plugin-Prettier & ESLint-Config-Prettier do](https://stackoverflow.com/a/44690309), [eslint-plugin-prettier repo](https://github.com/prettier/eslint-plugin-prettier), [eslint-config-prettier repo](https://github.com/prettier/eslint-config-prettier)
 * [**Moment.js**](https://momentjs.com/): date and time library
   * Overall makes working with dates in JS easier
   * Provides a large API for parsing, validating, manipulating, and formatting date/time

### Folder Structure

## Backend - API Folder
The following are the technologies used on the backend and their purpose in the project.

### Technologies
* TypeScript
  * `tsconfig.json` for typescript config file
* **Node.js/Express:** Backend Framework
  * Creates routes for API
* **Cors:** Enables CORS for express and allows confirguation for CORS. CORS = Cross-Origin Resource Sharing. This package basically lets the api interact with clients on other ips (not just the ip that the api is being hosted on).
* **MongoDB/Mongoose(Typegoose):** NoSQL Database
  * MongoDB sets up the database
  * Mongoose is a tool to work with MongoDB and supports async/await
* **Passport.js:** Authentication
  * Username/Password (Local Strategy)
  * Google Authentication Strategy
* **Bcrypt:** Helps hash passwords. Used with passport.js during signup to hash the password and save it to mongodb. Then during login Bcrypt will compare the given password in the form with the hashed password saved in the db.
* **Express-session:** Session middleware for Express. Handles the management of sessions. Uses cookies to log sessionID
  * In CORS on the backend. Set the HTTP header Access-Control-Allow-Credentials value to true to allow receiving and sending cookies by a CORS Request. `credentials: true`
  * ```javascript
      const corsMiddleware = cors({
      origin: CLIENT_URL,
      credentials: true,
    })
    ```
  * On the frontend. Set the XMLHttpRequest.withCredentials flag to true. We're using axios in this project so...
  *  ```javascript
     Axios.defaults.withCredentials = true;
     ```
* **connect-mongo:** Mongodb session store that connects with express-session. Sessions created by express-session will be stored into MongoDB automatically when connecting this middleware during the express-session setup.
  * ```javascript
    const session = require("express-session");
    const MongoStore = require("connect-mongo");
    app.use(
      session({
          secret: "super-secret",
          resave: false,
          saveUninitialized: true,
          store: MongoStore.create({ mongoUrl: mongoUrl })
      })
    );
    ```
* **Helmet.js**: API Security
* **dotenv**
  * Loads environment variables from ```.env``` file into process.env
* **Nodemon**
  *  Auto restarts the backend when files are modified
* [**Moment.js**](https://momentjs.com/): date and time library
   * Overall makes working with dates in JS easier
   * Provides a large API for parsing, validating, manipulating, and formatting date/time

### Folder Structure

## Toolbox
Other packages that arenn't in this boilerplate, but are my top choices when facing a problem that requires them.
* **Material-Table:** Large support React table that matches the material-ui look
* **Socket-io:** For two-way real-time communication
* **Chart.js:** For simple charts/graphs
  * Can also try (amcharts)[https://www.amcharts.com/demos/pareto-diagram/]
* **React-slick**: Carousel with React support

## How to run this project
### First time PreReq Downloads
* Node.js LTS version from their website (Node.js download comes with npm)
* Mongodb from their website (optional if you the free online db instead of locally hosting the mongodb)
* ESLint and Prettier VSCode exstensions
  * Along with their VSCode settings configuration 
  ```javascript
      // These are all my auto-save configs
    "editor.formatOnSave": true,
    // disable format on save for js. eslint will do this for us
    "[javascript]": {
      "editor.formatOnSave": false
    },
    // disable format on save for jsx. eslint will do this for us
    "[javascriptreact]": {
      "editor.formatOnSave": false
    },
    // tell the ESLint plugin to run on save
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    },
    // tell eslint where my files are
    "eslint.workingDirectories": [
      "./web",
      { "mode": "auto" }
    ],
    "eslint.validate": [
      "javascript"
    ],
  ```
  
### Intial setup
After you download this project and have it locally. Run 
```git
npm i
```
inside both the api and web folder in order to install all the necessary packages listed in package.json needed to run this web app.


### How to run the Api (backend)
Make sure you're in the api folder  
```
npm run start
```
### How to the run the Web (frontend)
Make sure you're in the web folder  
```
npm run dev
```

## Hosting
Generally I host my websites on DigitalOcean droplets using Nginx. ($5/month)   
Others options are
 * vercel which works well with Next.js sites (FREE)
 * heroku (free)

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
   

 
