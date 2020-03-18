const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

console.log(chalk.cyanBright.inverse(notes.getNotes()));

yargs.command({
    command:"add",
    description:"Adding a note",
    handler:function(){
        console.log(chalk.green.inverse("Adding a note.."))
    }
})

yargs.command({
    command:"remove",
    description:"Removing a note",
    handler:function(){
        console.log(chalk.red.inverse("Removing a note.."))
    }
})

yargs.command({
    command:"read",
    description:"Reading a note",
    handler:function(){
        console.log(chalk.yellow.inverse("Reading a note.."))
    }
})

yargs.command({
    command:"list",
    description:"Listing a note",
    handler:function(){
        console.log(chalk.blue.inverse("Listing a note.."))
    }
})
.parse()

