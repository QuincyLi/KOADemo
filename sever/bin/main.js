import Koa from 'koa';
import webpack from 'webpack';
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware';
import devConfig from 'config/webpack.config.dev';
import router from '../routes/index';

const app = new Koa();
const complie = webpack(devConfig);

app.use(devMiddleware(complie, {
  // display no info to console (only warnings and errors)
  noInfo: false,

  // display nothing to the console
  quiet: false,

  // switch into lazy mode
  // that means no watching, but recompilation on every request
  lazy: true,

  // watch options (only lazy: false)
  watchOptions: {
      aggregateTimeout: 300,
      poll: true
  },

  // public path to bind the middleware to
  // use the same as in webpack
  publicPath: "/assets/",

  // custom headers
  headers: { "X-Custom-Header": "yes" },

  // options for formating the statistics
  stats: {
      colors: true
  }
}));

app.use(hotMiddleware(compile, {
  // log: console.log,
  // path: '/__webpack_hmr',
  // heartbeat: 10 * 1000
}));

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);
console.log('has listened');
