const express = require("express")
const Task = require("./Data/Task")
const dotenv = require("dotenv")

const App = express();
dotenv.config();

App.get("/" , (req , res)=>
{
res.send("Api is running on browser...")

})

App.get("/api/Task" , (req , res)=>
{
    res.json(Task)
})

App.get("/api/Task/:id" , (req , res)=>
{
    const Task = Task.find((n)=>n._id===req.params.id);
    res.send.json(Task)
})

const PORT = process.env.PORT || 500
App.listen(PORT , console.log(`running at ${PORT}`))
