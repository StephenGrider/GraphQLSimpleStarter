const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(express.static('dist'));

app.listen(4000, () => {
  console.log('Listening');
});
