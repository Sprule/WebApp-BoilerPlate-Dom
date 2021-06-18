require('dotenv').config()
import express from "express";
import mongoose from "mongoose"
import cors = require('cors')
import userRoutes from './routes/user.routes'

export let CLIENT_URL = process.env.PRODUCTION
  ? process.env.CLIENT_URL : 'http://localhost:3000'

const PORT = process.env.PORT || 3001;

var app = express();

const server = app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});

const corsMiddleware = cors({
  origin: CLIENT_URL,
})
app.use(corsMiddleware)
app.options('*', corsMiddleware)

// express setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/user', userRoutes)

// mongo connection
const dbName = "example"
mongoose.set('useFindAndModify', false)
const mongoUrl = process.env.MONGO_URL || `mongodb://localhost:27017/${dbName}`;
console.log('Connecting to mongo at: ', mongoUrl);

mongoose.connect(mongoUrl, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database at: ', mongoUrl))




