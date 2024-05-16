
import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
try {
    const notes = await Note.find();
    res.status(200).json(
        {
            success: true,
            data: notes,
        });
} catch (error) {
    res.status(400).json({
        success: false,
        
    })
    
}
        
}
export const getNote = async (req, res) => {

  
try {
    if(!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({
            success: false,
            error: "invalid note id",
        })
    }

    // check if vaild mongo id

    const note = await Note.findById(req.params.id);
    if (!note) {
        return res.status(404).json({
            success: false,
            error: "Note not found",
        });
    } 
    res.status(200).json({
        success: true,
        data: note,
    });
} catch (error) {
    
    res.status(400).json({
        success: false,
        error:error.message,
    });
}
};

export const addNote = async (req, res) => {
try {
    const note = await Note.create(req.body);
    res.status(201).json({
        success: true,
        data: note, 
    });
    
} catch (error) {
    res.status(400).json({
        success: false,
        error:error.message,
    });
} 
};
export const updateNote = async(req, res) => {
    try {
        const note = await Note.findById(req.params.id) 
        if(!note) {
            return res.status(404).json({
                success: false,
                error: "Note not found",
            });
        }
        const updateNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            
        })
        res.status(200).json({
            success: true,
            data: updateNote,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error:error.message,
        });
        
    }
    
}
// delete note 
export const deleteNote = async (req, res) => {

try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if(!note) {
        return res.status(400).json({
            success: false,
            error: "Note not found",
        }); 
    }
    res.status(200).json({
        success: true,
        data: {},
    });

} catch (error) {

    res.status(400).json({
        success: false, 
        error:error.message,
    });

}

}

