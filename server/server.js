const path = require('path');
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;
const apiRouter = require('./routes/api');
const balanceController = require('./controllers/balanceController');

/**

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
// app.use(express.static(path.resolve(__dirname, '../client')));
// statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'

/**
 * define route handlers
 */
//  app.use('/transactions', transactionRouter);
// app.use('/api', apiRouter);

/**
 * app.get('/home', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/home.html'));
});
*/
// app.use('/', express.static(path.join(__dirname, '../build')));

app.get('/', balanceController.getData, (req, res) => {
  res.status(200).json(res.locals.data);
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
