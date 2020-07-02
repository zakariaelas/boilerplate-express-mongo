const { UnexpectedError, CustomError } = require('../../errors/');

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    const { statusCode } = err;
    res.status(statusCode).json({ error: err.serializeError() });
  } else {
    const unexpectedError = new UnexpectedError(err);
    res
      .status(unexpectedError.statusCode)
      .json({ error: unexpectedError.serializeError() });
  }
};

module.exports = errorHandler;
