const CustomError = require('./CustomError');

class CredentialsError extends CustomError {
  name = 'CredentialsError';
  constructor(statusCode = 401, message = 'Wrong credentials') {
    super(statusCode, message);
  }
}

module.exports = CredentialsError;
