import NotesAPI from"./NotesAPI.js"

NotesAPI.saveNote({
    id:828588,
    title:"the title has changed!",
    body:"I am a new note."
});

console.log(NotesAPI.getAllNotes());