const mongoose = require("../database/connection");
const {songSchema} = require("./songs");
const { Schema } = mongoose; //===mongoose.Schema

//Define
const albumSchema = new Schema({
  Name: String,
  artistName: String,
  releaseDate: Date,
  featuredArtist: [String],
  genre: String, 
  // songs: [songSchema],  //embedded a Schema  
  songs: [{ref: "Song", type: mongoose.Schema.Types.ObjectId}],
  writers: [String],
  producers: [String],
});

const Album = mongoose.model("Album", albumSchema)
module.exports = Album;
