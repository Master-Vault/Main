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

// {
//   "account_id": "bZPxWjNA5Wf4oJE95B1KTlajybobDVu3Gap6P",
//   "account_owner": null,
//   "amount": 5.4,
//   "authorized_date": "2021-12-05",
//   "authorized_datetime": null,
//   "category": [
//       "Travel",
//       "Taxi"
//   ],
//   "category_id": "22016000",
//   "check_number": null,
//   "date": "2021-12-06",
//   "datetime": null,
//   "iso_currency_code": "USD",
//   "location": {
//       "address": null,
//       "city": null,
//       "country": null,
//       "lat": null,
//       "lon": null,
//       "postal_code": null,
//       "region": null,
//       "store_number": null
//   },
//   "merchant_name": "Uber",
//   "name": "Uber 063015 SF**POOL**",
//   "payment_channel": "in store",
//   "payment_meta": {
//       "by_order_of": null,
//       "payee": null,
//       "payer": null,
//       "payment_method": null,
//       "payment_processor": null,
//       "ppd_id": null,
//       "reason": null,
//       "reference_number": null
//   },
//   "pending": false,
//   "pending_transaction_id": null,
//   "personal_finance_category": null,
//   "transaction_code": null,
//   "transaction_id": "nvx5nJgkNnuK17yj5zblCP5GAA74G4iGLQoDa",
//   "transaction_type": "special",
//   "unofficial_currency_code": null
// },

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

module.exports = { Transaction };
