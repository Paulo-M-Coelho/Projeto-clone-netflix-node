const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    name:{type: String, required: true},
    category:{type: String, required: true},
    description:{type: String, required: true},
    urlImage:{type: String, required: true},
    urlVideo:{type: String, required: true},
});

module.exports = mongoose.model('Video', videoSchema)