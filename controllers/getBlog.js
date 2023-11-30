const blog = require("../models/blog");


exports.getBlog = async (req, res) => {
    try {
         const blog=await blog.find({});
         res.status(200)
         .json({
            success:true,
            data:blogs,
            message:"all posts fetched",
         });
    }
    catch (err) {
        console.error(err);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            error:"server error",
            message:err.message,
        })
    }
}

exports.getBlogById=async(req,res)=>{
    try{
        const id=req.params.id;
        const blog=await blog.findById({_id:id})

        if (!blog){
            return res.status(404) .json({
                success:false,
                message:"no data found",
            })
        }
        res.status(200) .json({
            success:true,
            data:blog,
            message:`blog ${id} data successfully fetched`
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:" server error",
            message:err.message,
        });
    }
}