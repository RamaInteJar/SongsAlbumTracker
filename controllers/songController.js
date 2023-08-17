const express = require("express")
const router = express.Router();
const {Song} = require("../models/songs")

//Index New Delete Update Create Edit Show
router.get("/", async (req, res) => {
    const allSongs = await Song.find({});
    res.render("songs/index.ejs", {songs: allSongs});
  });
  
  router.delete("/:id", async (req, res) => {
    //get id from req.params
    const id = req.params.id;
    const deleteSong = await Song.deleteOne({ _id: id });
    res.send(deleteSong);
  });
  
  router.post("/", async (req, res) => {
    //create new song
    const createdSong = await Song.create(req.body);
    res.send(createdSong);
  });
  
  router.get("/:id", async (req, res) => {
    //update a song
    //for updates if you dont pas new: true your response aftet the await will show
    //the old object instead of the updated *not it will update though*
    const getASong = await Song.findById(req.params.id);
    res.send(getASong);
  });
  
  router.put("/:id", async (req, res) => {
    //update a song
    //for updates if you dont pas new: true your response aftet the await will show
    //the old object instead of the updated *not it will update though*
    const id = req.params.id;
    const updatedSong = await Song.updateOne({ _id: id }, req.body, {
      new: true,
    });
    res.send(updatedSong);
  });

module.exports = router;