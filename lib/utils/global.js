const chalk = require('chalk');

global.log = console.log;

global.L = chalk.keyword('orange').bold;
global.D = chalk.red.bold.bgBlackBright;
global.C = chalk.red.bold.bgAnsi256(255);
global.E = chalk.bold.red;
global.W = chalk.bold.yellow;
global.O = chalk.bold.green;
global.I = chalk.bold.bgBlackBright;
global.DE = chalk.bold.green.bgBlackBright;
