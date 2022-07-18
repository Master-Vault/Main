const express = require('express');

const dataController = require('../controllers/dataController');
const userController = require('../controllers/userController');

const router = express.Router();

module.exports = router;

router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).send('Created account');
});

router.post(
  '/sync',
  userController.verifyUser,
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