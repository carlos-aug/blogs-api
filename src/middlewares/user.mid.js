const JWT = require('jsonwebtoken');

const userMid = (req, res, next) => {
  const { displayName, email, password } = req.body;

  const emailRegex = /\S+@\S+\.\S+/;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
};

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

module.exports = {
  userMid,
  validateToken,
};
