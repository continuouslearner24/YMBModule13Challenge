const router = require('express').Router();
const { Category } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add POST, PUT, DELETE routes as needed

module.exports = router;
