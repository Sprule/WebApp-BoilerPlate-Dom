# Website-BoilerPlate-Dom

This is a starter boilerplate for my web apps using the following technologies.

## Frontend
The following are the technologies used on the frontend and their purpose in the project.
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
  * Webpack
    * Code-splitting
  * CI/CD support when hosted with Vercel
* **Styled Components:** Handles styling for the project
  * Alternative to React JSX and Next.js css modules
  * Supports SaSS, dynamic styling, autogenerates unique class names for styles, componentized styles
  * Also handles theme colors for the project using
* **Material UI:** UI Component library 
  * Uses theme from styled components for the components
* **FontAwsome Icons for React:** Icon library
  * The main provider for icons throughout the webapp  
* **Axios:** Promise based HTTP client
  *  Supports making HTTP requests asynchronously with async/await
* **ESLint + Prettier Configuration:** Auto fixes coding errors and code styling
  * ESLint: Checks for best practices in JS,JSX, & React
  * Prettier: Keeps the projects code format consistent by autofixing code to follow set rules
  * Can be integrated with VSCode to enable formatting on save

## Backend
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
  * Loads environment variables from .env file into process.env
* **Nodemon**
  *  Auto restarts the backend when files are modified

## Todo
* Jest or Mocha?
* Morgan?

 
