const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use( express.json() );

const blogRoutes = require("./routes/blog");
app.use("/api/post", blogRoutes);

app.listen(PORT, () => {
    console.log("server started at ${PORT}");
})

const dbConnect=require("./config/database");
dbConnect();

app.get("/", (req,res)=>{
    res.send (`<h1> this is homepage</h1>`)
})