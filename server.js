const express = require("express");
const app = express();
const { Song } = require("./models/songs");
const songController = require("./controllers/songController")
const albumController = require("./controllers/albumController")
const Album = require("./models/albums");

//Middleware
//allows form data
app.use(express.urlencoded({ extended: false }));
//when you want to use res.json instead of res.send
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server side");
});
app.use("/songs", songController)
app.use("/albums", albumController)
const PORT = 3400;
app.listen(PORT, () => {
  console.log(`Hello from the server side ${PORT}`);
});
