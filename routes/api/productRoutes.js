const router = require('express').Router();
const { Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add POST, PUT, DELETE routes as needed

module.exports = router;
