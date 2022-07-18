const { models } = require('mongoose');
const UserModels = require('../models/userModels.js');
const bcrypt = require('bcryptjs');

const userController = {};

/**
 * createUser - create and save a new User into the database.
 */
userController.createUser = (req, res, next) => {
  console.log('Entered createUser');
  console.log(req.body);
  const { username, password } = req.body;
  console.log(username);

  UserModels.UserLogin.create({
    username,
    password,
  })
    .then((data) => {
      console.log(data);
      res.locals.user = data;
      return next();
    })
    .catch((err) => {
      next({
        log: `userController.createUser: ERROR: ${err}`,
        message: { err: 'Error occurred when creating user.' },
      });
    });
};

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
userController.verifyUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const queryResult = await UserModels.UserLogin.findOne({ username });
    const comparePass = await bcrypt.compare(password, queryResult.password);
    if (!queryResult || !comparePass) {
      console.log('Username or password was incorrect.');
      return next('Username or password was incorrect.');
    } else {
      console.log('logged in successfully');
      res.locals.user = queryResult;
      return next();
    }
  } catch (err) {
    return next({
      log: `userController.verifyUser: ERROR: ${err}`,
      message: { err: 'Error occurred when verifying user.' },
    });
  }
};

module.exports = userController;
