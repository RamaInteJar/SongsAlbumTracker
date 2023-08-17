const express = require("express");
const app = express();
const { Song } = require("./models/songs");
const Album = require("./models/albums");

//Middleware
//allows form data
app.use(express.urlencoded({ extended: false }));
//when you want to use res.json instead of res.send
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server side");
});
//Index New Delete Update Create Edit Show
app.get("/songs", async (req, res) => {
  const allSongs = await Song.find({});
  res.send(allSongs);
});

app.delete("/songs/:id", async(req, res)=>{
    //get id from req.params
    const id = req.params.id;
   const deleteSong = await Song.deleteOne({_id: id})
   res.send(deleteSong)
})
app.post("/songs", async (req, res) => {
  //create new song
  const createdSong = await Song.create(req.body);
  res.send(createdSong);
});
app.get("/songs/:id", async (req, res) => {
    //update a song
    //for updates if you dont pas new: true your response aftet the await will show
    //the old object instead of the updated *not it will update though*
    const getASong = await Song.findById(req.params.id)
    res.send(getASong);
  });

app.put("/songs/:id", async (req, res) => {
  //update a song
  //for updates if you dont pas new: true your response aftet the await will show
  //the old object instead of the updated *not it will update though*
  const updatedSong = await Song.updateOne({ _id: req.params.id }, req.body, {
    new: true
  });
  res.send(updatedSong);
});

app.post("/albums", async (req, res) => {
  req.body.releaseDate = new Date(req.body.releaseDate);
  const createdAlbum = await Album.create(req.body);
  res.send(createdAlbum);
});


const PORT = 3400;
app.listen(PORT, () => {
  console.log(`Hello from the server side ${PORT}`);
});
