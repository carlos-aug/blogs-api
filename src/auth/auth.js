const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '15min',
};

const createToken = (email) => {
    const token = JWT.sign({ data: email }, secret, jwtConfig);
    return token;
  };

module.exports = {
    createToken,
};