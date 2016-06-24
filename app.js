var express = require('express');
var graphqlHTTP = require('express-graphql');
var StarWarsSchema = require('./schemas/starWars').StarWarsSchema;

const app = express();

app.use('/starwars', graphqlHTTP({
  schema: StarWarsSchema,
  graphiql: true
}));

app.listen(3000);