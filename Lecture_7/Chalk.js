const chalk = require("chalk");

const figlet = require("figlet");

console.log(chalk.green("I am Green "));
console.log(chalk.cyan("I am Cyan "));
console.log(chalk.magenta("I am Magenta "));
console.log(chalk.yellow("I am Yellow "));
console.log(chalk.yellow(figlet.textSync("Vishal")));