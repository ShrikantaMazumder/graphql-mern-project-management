const express = require("express");
const colors = require("colors")
require('dotenv').config()
const cors = require('cors')
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema.js');
const connectDB = require("./config/db")

const port = process.env.PORT || 4000

const root = {
  hello: () => {
    return "Hello world!";
  },
};

const app = express();
// Database connection
connectDB()
app.use(cors())

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Listening to ${port}`))