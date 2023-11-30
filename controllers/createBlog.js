const blog = require("../models/blog");

exports.createBlog = async (req, res) => {
    try {
        const { title,content,author,tags,comments} = req.body;
        const response = await blog.create({ title,content,author,tags,comments});
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "posted successfully"
            }
        );
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: "server error",
                message: err.message,
            })
    }
}