const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes...";
}

const addNote = (title,body) => {
    const notes = loadNotes(title,body);
    //Restrict adding a note if title is already present
    titleTaken = notes.find((values)=>{
        return values.title === title;
    })
    if(titleTaken){
        return console.log(chalk.red.inverse("Title already present.."));
    }

    notes.push({
        title,
        body
    })
    saveNotes(notes);
    return console.log(chalk.cyan.inverse("Note added.."));
}

const removeNote = (title,body) =>{
    const notes = loadNotes(title,body);
    const initialNotesLength = notes.length;
    notes.forEach((values,index)=>{
        if(values.title == title && values.body == body){
            notes.splice(index, 1);
        }
    })
    saveNotes(notes);
    if(notes.length == initialNotesLength){
        return console.log(chalk.cyan.inverse("No such note found!!"));
    }
    return console.log(chalk.cyan.inverse("Note Removed.."));
}

const readNote = (title,body) =>{
    const notes = loadNotes(title,body);
    notes.forEach((values)=>{
        if(values.title === title && values.body === body){
            return console.log(chalk.blue.inverse(values.title + " " + values.body));
        }
    })
}

const listNotes = (title,body) =>{
    const notes = loadNotes(title,body);
    if(notes.length == 0){
        return console.log(chalk.red.inverse("No note found!!"));
    }
    notes.forEach((values)=>{
        return console.log(chalk.yellow.inverse(values.title + " " + values.body));
    })
}

const loadNotes = (title,body) => {
    try{
        const bufferNotes = fs.readFileSync('./notes.json');
        const data = JSON.parse(bufferNotes.toString());
        return data;
    }
    catch(e){
        return [];
    }
}

const saveNotes = (notes) =>{
   fs.writeFileSync('./notes.json',JSON.stringify(notes));
}

module.exports={
    getNotes,
    addNote,
    removeNote,
    readNote,
    listNotes
}