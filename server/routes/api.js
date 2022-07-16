const express = require('express');

const dataController = require('../controllers/dataController');

const router = express.Router();

module.exports = router;

router.get(
  '/sync',
  dataController.deleteDatabase,
  dataController.syncTransaction,
  dataController.syncBalance,
  (req, res) => {
    res.status(200).send('Updated all');
  }
);

router.get(
  '/',
  dataController.getTransaction,
  dataController.getBalance,
  (req, res) => {
    res.status(200).json(res.locals.data);
  }
);
