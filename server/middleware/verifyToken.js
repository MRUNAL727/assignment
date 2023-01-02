const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
  const cookies = req.headers.cookie;

  if (cookies !== undefined) {
    const token = cookies.split('=')[1];
    if (!token) {
      res.status(404).json({ message: 'No token found' });
    } else {
      jwt.verify(String(token), 'ab85274d3ccb5f0188938576', (err, user) => {
        if (err) {
          console.log(err);
          return res.status(400).json({ msg: 'Invalid TOken' });
        } else {
          req.type = user.type;
        }
      });
    }
  } else {
    console.log('Please login')
    return res.status(400).send({ msg: 'Please login as a seller' });
}
next();

};

module.exports = verifyToken;
