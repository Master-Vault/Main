const mongoose = require('mongoose');

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
