const blog = require("../models/blog");

exports.deleteBlog = async (req, res) => {
    try{
        const {id}=req.params;
        await Blog.findByIdAndDelete(id);
        res.json({
            success:true,
            message:"deleted successfully!",
        })
    }
    catch(err){
        console.error(err);
            res.status(500)
                .json({
                    success: false,
                    error:err.message,
                    message: `server error`,
                });
    }
}