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

const accountSchema = new mongoose.Schema({
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

const Account = mongoose.model('Account', accountSchema);

module.exports = { Account };
