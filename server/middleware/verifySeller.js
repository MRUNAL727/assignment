const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');

const verifySeller = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.type === 'seller') {
        console.log(req.type)
      next();
    } else {
        console.log('you are not authenticated')
      return res.status(304).json({ msg: 'You are not authenticated' });
    }
  });
};

module.exports = verifySeller;
