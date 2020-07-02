const CustomError = require('./CustomError');

class ForbiddenError extends CustomError {
  name = 'ForbiddenError';
  constructor(statusCode = 403, message = 'No permissions') {
    super(statusCode, message);
  }
}

module.exports = ForbiddenError;
