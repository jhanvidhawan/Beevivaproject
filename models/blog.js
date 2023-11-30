const mongoose=require("mongoose");

const postSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:255,
        },
        content:{
            type:String,
            required:true,
            maxLength:5000,
        },
        author:{
            type:String,
            required:true,
        },
        tags:{
            tyoe:String,
            required:true,
        },
        comments:{
            type:String,

        }
        
    }
);

module.exports=mongoose.model("Todo",todoSchema);