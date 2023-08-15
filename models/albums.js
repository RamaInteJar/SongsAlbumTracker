const mongoose = require("../database/connection");
const Song = require("./songs");
const { Schema } = mongoose; //===mongoose.Schema

//Define
const albumSchema = new Schema({
  Name: String,
  artistName: String,
  releaseDate: Date,
  featuredArtist: [String],
  genre: String,
  songs: [Song],
  writers: Array,
  producers: Array,
});

const Album = mongoose.model("Album", albumSchema)
module.exports = Album;
