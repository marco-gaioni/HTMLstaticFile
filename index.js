const { static } = require("express")
const express = require("express")
const app = new express()
const fs = require("fs")
const port = 8080

//const index = fs.readFileSync("./index.html", "utf-8")
app.use(express.static('public'))

app.get("/", (req,res)=>{
    const index = fs.readFileSync("./index.html", "utf-8")
    res.send(index)
})

app.listen(port, () => console.log(`app listen on port ${port}`))

