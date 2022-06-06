const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/error.handlers');

const req = require('express/lib/request');

const app = express();

const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/nuva-ruta', (res) => {
  res.send('soy otra rutas');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({ categoryId, productId });
});

app.listen(port, () => {
  console.log('mi port is ', port);
});
