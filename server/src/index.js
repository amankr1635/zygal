const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/routes");
const cors = require("cors")
const app =express()
app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://amankr1635:G37bnXkRyiaLxydV@cluster0.agezoqv.mongodb.net/zygal")
.then(()=> console.log("mongoDb is connected"))
.catch((err)=> console.log(err))

app.use("/",route)
const port = 3001
app.listen(port,()=>{
    console.log("server is running on port",`${port}`)
})