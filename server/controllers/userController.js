const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      return res.status(422).json({ error: 'User already exist' });
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    console.log(hash);

    const newUser = await new User({
      email: req.body.email,
      password: hash,
      type: req.body.type,
    });

    const u = await newUser.save();
    res.status(200).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) {
      return res.status(403).json({ msg: 'wrong password' });
    } else {
      const token = jwt.sign(
        { id: user._id, type: user.type },
        'ab85274d3ccb5f0188938576'
      );

      res.cookie(String(user._id), token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 30), // 30 seconds
      });
      res.status(200).json({ msg: 'logged in successfully'});
    }
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
};

module.exports = { register, login };
