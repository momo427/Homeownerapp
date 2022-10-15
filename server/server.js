const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 4000;
const schema = require('./schema/schema');

var { buildSchema } = require('graphql');

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  //for development, so set to true if in development
  graphiql: process.env.NODE_ENV === 'development',
}));
app.listen(port, () => console.log('Now browse to localhost:4000/graphql'));
