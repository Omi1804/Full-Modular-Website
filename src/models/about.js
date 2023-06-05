const mongoose = require('mongoose')

const About = mongoose.Schema({
    title:String,
    para:String
})

module.exports = mongoose.model("about",About)