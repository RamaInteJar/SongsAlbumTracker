const express = require('express');
const app = express()
const Song = require("./models/songs")

//Middleware
//allows form data
app.use(express.urlencoded({extended: false}))
//when you want to display data in the form of Json
app.use(express.json())


//Index New Delete Update Create Edit Show
app.get('/', (req, res)=>{
    res.send("Hello from the server side")
})

app.post("/songs", async(req, res)=>{
    //create new song
    const createdSong = await Song.create(req.body)
    res.json(createdSong)

})




const PORT = 3400
app.listen(PORT, ()=>{
console.log(`Hello from the server side ${PORT}`);
})