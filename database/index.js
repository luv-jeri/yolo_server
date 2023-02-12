const mongoose = require('mongoose');

const DB = process.env.DATABASE;

console.log(L(DB));

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database_connection = mongoose.connection;

database_connection.on('error', (error) => {
  console.log(error);
});

database_connection.on('open', () => {
  console.log('Database connection successful');
});

module.exports = database_connection;
