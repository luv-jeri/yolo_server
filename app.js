const express = require('express');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const error_handler = require('./lib/handlers/error.handler');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const _Error = require('./lib/utils/_error');
const app = express();

const origin = [
  'http://localhost:3000/',
  'http://localhost:3000',
  'https://pikmi-client.vercel.app/',
  'https://pikmi-client.vercel.app',
];

app.use(
  cors({
    origin,
    credentials: true,
  })
);

app.use(
  rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 1000,
  })
);
app.use(mongoSanitize());

app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // ? Middleware to show req and res details.
}

//* Serving Documentation HTML file
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/', require('./routes'));

app.use(error_handler);

//* Error handling middleware
app.all('*', async (req, res, next) => {
  // await errorSaver(req, 'client');
  next(new _Error(`Can't find ${req.path} :(`, 404));
});

module.exports = app;