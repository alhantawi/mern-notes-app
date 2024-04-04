import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    userId : {
        type : String,  
        required : [true, "Please add a userId"],
    },
    title : {
        type : String,
        required : [true, "Please add a title"],
        maxlength: [40, "Title can not be more than 20 characters"],
    },
    description : {
        type : String,
        required : true,
        maxlength: [200, "Description can not be more than 200 characters"],
    
    },
    color : {
        type : String,
        default : "white"
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
})

export default mongoose.model("Note", noteSchema);