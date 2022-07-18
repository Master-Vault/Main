const dataModels = require('../models/dataModels');
const fetch = require('node-fetch');
const dataController = {};

dataController.deleteDatabase = (req, res, next) => {
  dataModels.Transaction.deleteMany({}).catch((err) => {
    console.log('dataController getTransaction error: ', err);
  });
  dataModels.Balance.deleteMany({}).catch((err) => {
    console.log('dataController getBalance error: ', err);
  });
  next();
};

dataController.syncTransaction = (req, res, next) => {
  const data = {
    client_id: '62d187a3360d1f0012b175e4',
    secret: '20d614c7f64862038d1917f7a1d847',
    access_token: 'access-sandbox-2bb5c027-be99-4838-8b9a-f2c87be4e107',
    start_date: '2021-01-01',
    end_date: '2021-12-10',
  };

  fetch('https://sandbox.plaid.com/transactions/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((data) => {
      res.locals.data = [];
      for (let i = 0; i < 10; i++) {
        // console.log('Success:', data.transactions[i]);
        const { account_id, amount, name, date, category } =
          data.transactions[i];
        dataModels.Transaction.create({
          account_id: account_id,
          amount: amount,
          name: name,
          date: date,
          category: category,
        });
        res.locals.data.push(data.transactions[i]);
      }

      next();
    })

    .catch((error) => {
      console.error('Error:', error);
    });
};

dataController.syncBalance = (req, res, next) => {
  const data = {
    client_id: '62d187a3360d1f0012b175e4',
    secret: '20d614c7f64862038d1917f7a1d847',
    access_token: 'access-sandbox-2bb5c027-be99-4838-8b9a-f2c87be4e107',
  };

  fetch('https://sandbox.plaid.com/accounts/balance/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())

    .then((data) => {
      // console.log('data: ', data);
      // dataModels.Balance.deleteMany({}).catch((err) => {
      //   console.log('dataController getBalance error: ', err);
      // });
      // res.locals.data = [];
      for (let i = 0; i < data.accounts.length; i++) {
        // console.log('Success:', data.accounts[i]);
        const { account_id, balances, name, subtype } = data.accounts[i];
        dataModels.Balance.create({
          account_id: account_id,
          balance_available: balances.available,
          balance_current: balances.current,
          name: name,
          subtype: subtype,
        });
        // res.locals.data.push(data.accounts[i]);
      }

      next();
    })

    .catch((error) => {
      console.error('Error:', error);
    });
};

dataController.getTransaction = (req, res, next) => {
  dataModels.Transaction.find()
    .then((data) => {
      console.log('DB QUERY ', data)
      res.locals.data = {};
      res.locals.data.transactions = data;
      return next();
    })
    .catch((err) => {
      console.log('datacontroller getTransaction error: ', err);
    });
};

dataController.getBalance = (req, res, next) => {
  dataModels.Balance.find()
    .then((data) => {
      res.locals.data.balance = data;
      return next();
    })
    .catch((err) => {
      console.log('datacontroller getBalance error: ', err);
    });
};

module.exports = dataController;
