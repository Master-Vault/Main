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

// "transactions": [
//   {
//       "account_id": "mv35n9oz4nuqLwonrkbRtGrA4ZlZ5ViA7xZQ8",
//       "account_owner": null,
//       "amount": 25,
//       "authorized_date": "2021-12-05",
//       "authorized_datetime": null,
//       "category": [
//           "Payment",
//           "Credit Card"
//       ],
//       "category_id": "16001000",
//       "check_number": null,
//       "date": "2021-12-06",
//       "datetime": null,
//       "iso_currency_code": "USD",
//       "location": {
//           "address": null,
//           "city": null,
//           "country": null,
//           "lat": null,
//           "lon": null,
//           "postal_code": null,
//           "region": null,
//           "store_number": null
//       },
//       "merchant_name": null,
//       "name": "CREDIT CARD 3333 PAYMENT *//",
//       "payment_channel": "other",
//       "payment_meta": {
//           "by_order_of": null,
//           "payee": null,
//           "payer": null,
//           "payment_method": null,
//           "payment_processor": null,
//           "ppd_id": null,
//           "reason": null,
//           "reference_number": null
//       },
//       "pending": false,
//       "pending_transaction_id": null,
//       "personal_finance_category": null,
//       "transaction_code": null,
//       "transaction_id": "JJBEDbArZDi56APj39Mou5nArrqaAat5VkAWG",
//       "transaction_type": "special",
//       "unofficial_currency_code": null
//   },

const transactionSchema = new mongoose.Schema({
  account_id: {
    type: Object,
  },
  balances: {
    type: Object,
    required: true,
  },
  mask: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  official_name: {
    type: String,
  },
  subtype: {
    type: String,
  },
  type: {
    type: String,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = { Transaction };
