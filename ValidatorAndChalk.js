
   
const chalk=require('chalk');
const validator=require('validator');
const theNote=require('./notes.js');
console.log(theNote.getNotes);

const greenMsg=chalk.green.inverse.bold('chalk.green.inverse.bold');
console.log(greenMsg);

const blueMsg=chalk.blue.inverse.bold('chalk.blue.inverse.bold');
console.log(blueMsg);

console.log(chalk.blue("Hello")+ 'World'+chalk.red('!'));
console.log(chalk.blue.bgRed.bold('Hello World!'));

console.log(`
CPU: ${chalk.red("90%")}  
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}`);

console.log('foo@bar.com is an email : ',validator.isEmail('foo@bar.com'));
console.log('foobar.com is an email : ',validator.isEmail('foobar.com'));

console.log(validator.isURL('fish.com'));
console.log(validator.isURL('https://www.douglascollege.ca'));
 
