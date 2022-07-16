const express = require('express');

const dataController = require('../controllers/dataController');

const router = express.Router();

module.exports = router;

router.get('/', dataController.getTransaction, (req, res) => {
  res.status(200).json(res.locals.data);
});
