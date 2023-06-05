const express = require('express')
const routes = express.Router()

const Detail = require('../models/detail')
const slider = require('../models/slider')
const service = require('../models/service')
const Contact = require('../models/contact')
const about = require('../models/about')
const Footer = require('../models/footer')
const Pics = require('../models/gallery')

routes.get('/',async(req,res)=>{
    // res.send("this is msg from routes")

    //Now fetching the data form Mongo
    const details = await Detail.findOne({"_id" : "647e27b97a5bbddeaaa78283"})
    const slides = await slider.find()
    const services = await service.find() //-->for service_icons on the page
    const aboutUs = await about.find()
    const footer = await Footer.find()
//    res.render('index') -->use to send HTML pages but we use hbs engine so we use HBS as extension
    res.render("index",{
        details:details, //sending it to views
        slides:slides,
        services:services,
        aboutUs:aboutUs,
        footer:footer
    })

})

routes.get('/gallery',async(req,res)=>{
    const details = await Detail.findOne({"_id" : "647e27b97a5bbddeaaa78283"})
    const footer = await Footer.find()
    const pics = await Pics.find()
    res.render('gallery',{
        details:details,
        footer:footer,
        pics:pics
    })
})

//creating the route for the form data to submit
routes.post('/process-contact-form',async (req,res)=>{
    console.log('form is submitted')
    // console.log(req.body); -->data send thorugh form comes here 
    
    //saving the data in mongodb
    try{

        const data =await Contact.create(req.body);
        console.log(data);
        res.redirect('/')

    }catch(err){
        console.log(err);
        res.redirect('/')
    }

})

module.exports = routes;