class _Error extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.msg = message;
    this.message = message;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = _Error;
