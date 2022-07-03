const express = require('express');
const router = express.Router();

router
  .get('/', (req, res) => {
    res.json({
      mensaje: 'App fincionando'
    })
  });

module.exports = router;
