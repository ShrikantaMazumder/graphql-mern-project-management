const express = require("express");
require('dotenv').config()
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema.js');

const port = process.env.PORT || 4000

const root = {
  hello: () => {
    return "Hello world!";
  },
};

const app = express();
app.use(
  "/test",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Listening to ${port}`))