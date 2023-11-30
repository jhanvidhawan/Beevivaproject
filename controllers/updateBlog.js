const blog = require("../models/blog");

exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const {title,content,author,tags,comments } = req.body;
        const blog = await blog.findByIdAndUpdate(
            { _id: id },
            {title, content, author,tags,comments,updatedAt: Date.now() },
        )
        res.status(200).json({
            success: true,
            data: blog,
            message: `Updated Successfully`,
        })

    }
    catch (err) {
        console.error(err);
            res.status(500)
                .json({
                    success: false,
                    error:err.message,
                    message: `server error`,
                });

    }
}