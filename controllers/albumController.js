const express = require("express")
const router = express.Router();
const Album = require("../models/albums")


router.get("/", async (req, res) => {
    const alAlbums = await Album.find({});
    res.send(alAlbums);
  });
  
  router.delete("/:id", async (req, res) => {
    //get id from req.params
    const id = req.params.id;
    const deletAlbum = await Album.deleteOne({ _id: id });
    res.send(deletAlbum);
  });
  
  router.post("/", async (req, res) => {
    //create new song
    req.body.releaseDate = new Date(req.body.releaseDate);
    const createAlbum = await Album.create(req.body);
    res.send(createAlbum);
  });
  
  router.get("/:id", async (req, res) => {
    //update a song
    //for updates if you dont pas new: true your response aftet the await will show
    //the old object instead of the updated *not it will update though*
    const getAlbum = await Album.findById(req.params.id);
    res.send(getAlbum);
  });
  
  router.put("/:id", async (req, res) => {
    //update 
    req.body.releaseDate = new Date(req.body.releaseDate);
    //for updates if you dont pas new: true your response aftet the await will show
    //the old object instead of the updated *not it will update though*
    const id = req.params.id;
    const updateAlbum = await Album.updateOne({ _id: id }, req.body, {
      new: true,
    });
    res.send(updateAlbum);
  });

module.exports = router