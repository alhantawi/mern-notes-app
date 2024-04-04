

export const getNotes = (req, res) => {

    res.send("get all notes");      

}

export const getNote = (req, res) => {

    res.send("get  single note");   

}

export const addNote = (req, res) => {

    res.send("add new note");   
}

export const updateNote = (req, res) => {

    res.send("update note");
}

export const deleteNote = (req, res) => {

    res.send("delete note");    
}
