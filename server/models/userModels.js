const mongoose = require('mongoose');

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userLoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userLoginSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    return next();
  });
});

const UserLogin = mongoose.model('userLogin', userLoginSchema);

module.exports = { UserLogin };
