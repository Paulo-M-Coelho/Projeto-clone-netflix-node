const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    name:{type: String, required: true},
    category:{type: String, required: true},
    description:{type: String, required: true},
    ano:{type: String, required: true},
    nota:{type: String, required: true},
    urlImage:{type: String, required: true},
    urlBanner:{type: String, required: true},
    urlVideo:{type: String, required: true},
});

module.exports = mongoose.model('Video', videoSchema)