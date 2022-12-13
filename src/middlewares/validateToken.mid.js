const JWT = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const secret = process.env.JWT_SECRET;

  if (!authorization) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    JWT.verify(authorization, secret);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
