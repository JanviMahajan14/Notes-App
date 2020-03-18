const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes...";
}

const addNote = (title,body) => {
    const notes = loadNotes(title,body);

    //Restrict adding a note if title is already present
    let titleTaken = "";
    titleTaken = notes.filter((values)=>{
        return values.title === title;
    })
    if(titleTaken.length > 0){
        return console.log(chalk.red.inverse("Title already present.."));
    }

    notes.push({
        title,
        body
    })
    saveNotes(notes);
    console.log(chalk.cyan.inverse("Note added.."));
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
    addNote
}