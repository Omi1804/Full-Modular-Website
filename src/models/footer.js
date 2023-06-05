const mongoose = require('mongoose')

const Footer = mongoose.Schema({
    year:Number,
    company:String
})

module.exports = mongoose.model('footer',Footer);