const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

console.log(chalk.blue.inverse(notes.getNotes()));

yargs.command({
    command:"add",
    description:"Adding a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        console.log(chalk.green.inverse("Adding a note..")+ " " + argv.title+" "+argv.body)
        notes.addNote(argv.title,argv.body);
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
        console.log(chalk.magentaBright.inverse("Listing your notes.."))
    }
})
.parse()

