class UnexpectedError extends Error {
  constructor(error, statusCode = 500, message = 'Something went wrong') {
    super();
    this.error = error;
    this.message = message;
    this.statusCode = statusCode;
    console.error(this);
  }
  serializeError() {
    return { message: this.message, status: this.statusCode };
  }
}

module.exports = UnexpectedError;
