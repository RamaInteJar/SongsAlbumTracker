//require mongoose and tell it which database to connect to
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ramahawai87:M27vALXu6CVZlJS4@cluster0.n2cex8l.mongodb.net/SongsAlbumTracker?retryWrites=true')

mongoose.connection.on("connected", ()=>{
    console.log(`We are connected to MongoDB`);
})

mongoose.connection.on('error',  err=>{
    console.log('ERROR', err);
})

module.exports = mongoose;