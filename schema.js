import mongoose from "mongoose";

const model = mongoose.Schema({
    Name: {
        type : String,
        required : true
    },
    Age : {
        type : String,
        required : true
    }
})

export const PersonSchema = mongoose.model('profiles',model)