const expess = require('express');
const faker = require('faker');

const router = express.Router();


router.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send(404, 'no parametros');
  }
});

module.exports = router;
