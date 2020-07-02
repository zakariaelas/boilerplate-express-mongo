class CustomError extends Error {
  name = 'CustomError';
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    console.error(this);
  }
  serializeError() {
    return { message: this.message, status: this.statusCode };
  }
}

module.exports = CustomError;
