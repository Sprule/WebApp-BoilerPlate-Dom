# Website-BoilerPlate-Dom

This is a starter boilerplate for my web apps using the following technologies.

## Frontend
The following are the technologies used on the frontend and their purpose in the project.
* **Next.js:** Frontend framework
  * Folder Routing
  * Loads environment variables
  * SSR
  * Babel
  * Webpack
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
  * Google Authentication
* dotenv
  * Loads environment variables from .env file into process.env
* Nodemon
  *  Auto restarts the backend when files are modified

 
