const mongoose = require('mongoose')

const Pics = mongoose.Schema({
    imageUrl:String
})

module.exports = mongoose.model('pics',Pics);