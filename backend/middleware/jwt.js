const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'MAGIC_PAPERS_TOKEN');
    const userId = decodedToken.userId;
    if (req.body.userID && req.body.userID !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch(error) {
    res.sendStatus(401);
  }
};