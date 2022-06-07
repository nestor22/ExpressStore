const express = require('express');
const { restart } = require('nodemon');
const ProductService = require('../services/product.service');
const validateHanders = require('../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/product.schema');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get(
  '/:id',
  validateHanders(getProductSchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
);

router.post('/',
validateHanders(createProductSchema, 'body'), 
async (req, res) => {
  
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id',
validateHanders(getProductSchema, 'params'),
validateHanders(updateProductSchema, 'body'),

 async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
