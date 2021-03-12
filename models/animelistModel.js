const mongoose = require('mongoose');

const animeListSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'A tour must have a name']
    }
});






//creating model
const Anime = mongoose.model('animelist2', animeListSchema);

module.exports=Anime;