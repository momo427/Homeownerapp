const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const port = process.env.PORT || 4000;
const schema = require('./schema/schema');

var { buildSchema } = require('graphql');

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);



const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}));
app.listen(port, () => console.log('Now browse to localhost:4000/graphql'));
