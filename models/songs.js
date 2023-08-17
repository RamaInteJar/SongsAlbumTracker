const mongoose = require("../database/connection");
const { Schema } = mongoose; //===mongoose.Schema

//Define
const songSchema = new Schema({
  name: String,
  artistName: String,
  featuredArtist: [String],
  genre: String,
  writers: Array,
  producers: Array,
});

const Song = mongoose.model("Song", songSchema)
module.exports = {
  Song,
  songSchema
};
