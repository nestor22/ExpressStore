const express = require('express');
const req = require('express/lib/request');

const app = express();

const port = 3001;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/nuva-ruta', (res) => {
  res.send('soy otra rutas');
});

app.get('/products', (res) => {
  res.json([
    { name: 'producto 1', price: 1000 },
    { name: 'producto 1', price: 1000 },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ name: 'producto 1', price: 1000 });
});


app.get('/categories/:categoryId/products/:productId',(req, res)=>{
  const { categoryId, productId } = req.params;
  res.json({categoryId, productId});
})

app.get('/users', (req, res)=>{
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({limit, offset});
  }else{
    res.send(404, 'no parametros');
  }
})

app.listen(port, () => {
  console.log('mi port is ', port);
});
