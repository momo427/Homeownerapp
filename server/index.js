const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;
const schema = require('./schema/schema');

//connect db



const app = express();

connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  //for development, so set to true if in development
  graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(port, () => console.log('Now browse to localhost:3000/graphql'));
