const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  // headers: {     "Access-Control-Allow-Origin": "http://localhost:3000",
  //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  //   "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
  //  "Access-Control-Allow-Credentials": "true"}
}).listen(5000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:5000');
});
