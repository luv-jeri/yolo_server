require('dotenv').config({ path: './config.env' });
require('./lib/utils/global');

require('./database');

const app = require('./app');

const { PORT } = process.env || 3500;

app.listen(PORT, () => {
  console.log(
    L(`Yolo Server on PORT : '${PORT}' `),
    D(`${new Date().toLocaleString()}`),
    C(` Mode - ${process.env.NODE_ENV}  `)
  );
});
