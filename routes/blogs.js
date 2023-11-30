const express=require("express"); 
const router=express.Router();

const{createBlog}=require("../controllers/createBlog");
const{getBlog, getBlogById}=require("../controllers/getBlog");
const {updateBlog}=require("../controllers/updateBlog");
const {deleteBlog}=require("../controllers/deleteBlog");

router.post("/createBlog",createBlog);

router.get("/getBlogs",getBlog);
router.get("/getBlogs/:id", getBlogById);
router.put("/updateBlog/:id", updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);

module.exports=router;