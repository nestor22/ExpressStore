const express = require('express');
const faker = require('faker');

const req = require('express/lib/request');

const app = express();

const port = 3001;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/nuva-ruta', (res) => {
  res.send('soy otra rutas');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index< limit; index++) {
    products.push({ 
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(), 
    });
  }
  res.json(products);
});

app.get('/products/filter', function (req, res) {
  res.send.apply('shoy un filter');
})



app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ name: 'producto 1', price: 1000 });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({ categoryId, productId });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send(404, 'no parametros');
  }
});

app.listen(port, () => {
  console.log('mi port is ', port);
});
