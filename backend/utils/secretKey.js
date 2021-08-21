const { NODE_ENV, JWT_SECRET } = process.env;

const secretKey = {
  JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'super-strong-secret',
};

module.exports = secretKey;
