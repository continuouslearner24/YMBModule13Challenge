const router = require('express').Router();
const { Tag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add POST, PUT, DELETE routes as needed

module.exports = router;
