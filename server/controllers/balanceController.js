const dataModels = require('../models/dataModels');
const fetch = require('node-fetch');
const macrosController = {};

macrosController.getData = (req, res, next) => {
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
      console.log('Success:', data.accounts);

      const { account_id, balances, mask, name, official_name, subtype, type } =
        data.accounts[0];

      dataModels.Account.create({
        account_id: account_id,
        balances: balances,
        mask: mask,
        name: name,
        official_name: official_name,
        subtype: subtype,
        type: type,
      });

      res.locals.data = data.accounts[0];
      next();
    })

    .catch((error) => {
      console.error('Error:', error);
    });
};

module.exports = macrosController;
