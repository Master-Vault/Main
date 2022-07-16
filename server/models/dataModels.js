// import fetch from 'node-fetch';
const mongoose = require('mongoose');
// const axios = require('axios');

const MONGO_URI =
  'mongodb+srv://ian:gnmxAXDNxn6hE1kj@cluster0.2iyzt.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'accounts',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const transactionSchema = new mongoose.Schema({
  account_id: {
    type: String,
  },
  amount: {
    type: Number,
  },
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  category: {
    type: Array,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

const balanceSchema = new mongoose.Schema({
  account_id: {
    type: String,
  },
  balance_available: {
    type: Number,
  },
  balance_current: {
    type: Number,
  },
  name: {
    type: String,
  },
  subtype: {
    type: String,
  },
});

const Balance = mongoose.model('Balance', balanceSchema);

module.exports = { Transaction, Balance };
