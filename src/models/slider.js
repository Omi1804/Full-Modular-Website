const mongoose = require('mongoose')

const Slider = mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String
})

module.exports = mongoose.model('slider',Slider) //first is the name of router through which it is recognised by router