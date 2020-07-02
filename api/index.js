const apirouter = require('express').Router();
const errorHandler = require('./middleware/errors');

apirouter.get('/', (req, res) => {
  res.json({ message: 'API is working !' });
});

apirouter.use(errorHandler);

module.exports = apirouter;
