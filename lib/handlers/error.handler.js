const _Error = require('../utils/_error');

const cast_err = (err) => {
  const message = `Invalid/Type ${err.path} : ${err.value}  `;
  return new _Error(message, 400);
};

const jwt_err = () => {
  const message = `Invalid Token ❤️‍🔥`;
  return new _Error(message, 401);
};
const jwt_expired_err = () => {
  const message = `Token Expired ❤️‍🔥`;
  return new _Error(message, 401);
};

const _11000_err = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value ${value} `;
  return new _Error(message, 400);
};

const validation_err = (err) => {
  const err_message = Object.keys(err.errors).map((el) => el);
  const message = `Invalid input: ${err_message.join(', ')}`;
  return new _Error(message, 400);
};

const err_dev = (err, res) => {
  res.status(err.status).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

const err_prod = (err, res) => {
  if (err.isOperational) {
    res.status(err.status).json({
      status: err.status,
      isOperational: err.isOperational,
      message: err.msg,
      msg: err.msg,
    });
  } else {
    res.status(500).json({
      status: 500,
      message: 'Server Error ❤️‍🔥',
      msg: err.msg,
    });
  }
};

module.exports = (err, req, res, next) => {
  let err_ = err;
  err_.status = err.status || 500;

  if (process.env.NODE_ENV === 'development') {
    err_dev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    if (err_.name === 'CastError') {
      err_ = cast_err(err);
    } else if (err_.code === 11000) {
      err_ = _11000_err(err);
    } else if (err.name === 'ValidationError') {
      err_ = validation_err(err);
    } else if (err.name === 'JsonWebTokenError') {
      err_ = jwt_err(err);
    } else if (err.name === 'TokenExpiredError') {
      err_ = jwt_expired_err(err);
    } else {
      const message = `Something not specified in error handler. ❤️‍🔥`;
      err_ = new _Error(message, 500);
    }
    err_prod(err_, res);
  }
};
