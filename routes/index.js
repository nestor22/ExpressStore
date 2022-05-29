const productRouter = require('./products.router');
// const userRouter = require('./user.router');

function routerApi(app) {
  app.use('/products', productRouter);
  // app.use('/users', userRouter);
}

module.exports = routerApi;
