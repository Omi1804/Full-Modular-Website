console.log('Project Started');

const express = require('express')
const hbs = require('hbs') //-->hbs is a template engine use to serve HTML pages instead of text from node (alternative is PUG)
const app = express()
const routes = require('./routes/main')
const mongoose = require('mongoose')
const bodyParser = require('body-parser') //-->the data coming from the form converts into json through this module
require('dotenv').config()
const url = process.env.MONGODB_URL
const Detail = require('./models/detail')
const Slider = require('./models/slider');
const Service = require('./models/service');
const About = require('./models/about')
const Footer = require('./models/footer')
const Pics = require('./models/gallery')

app.use(bodyParser.urlencoded({extended:true})) //--> creates the upcoming data into an object

app.use("/bootstrap",express.static("public")) //-->use to serve static materials in our page (Bootstrap added bcs css not loading otherwise)
app.use('',routes); //--> this means if we fire blank then routes gets fired

//(Template engine)
app.set('view engine','hbs'); //-->using view engine as hbs
app.set('views','views') //-->giving the location of view type which is views folder in parent directory only
hbs.registerPartials('views/partials')

//db connection
mongoose.connect(url)
 .then(()=>{
    console.log("MongoDb connected")
 })
 .catch(err=>{
    console.log(err)
 })

//we just want to create datas in mongo so we want to execute this code just for once
/*
Detail.create({
    brandName: "Baba Yega",
    brandIconUrl:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    links:[
        {
            label:"Home",
            url:'/'
        },
        {
            label:"Services",
            url:"/services"
        },
        {
            label:"Gallery",
            url:"/gallery"
        },
        {
            label:"About",
            url:"/about"
        },
        {
            label:"Contact Us",
            url:"/contact-us"
        },
        
    ]

})
*/


//Creating temp data given to slider only once to create the neccessary fileds, as permanent will be given on Mongodb
/*
Slider.create([
    {
        title:'Hello mommy',
        subTitle:'Node Js ex',
        imageUrl:'/bootstrap/images/1.png'

    },
    {
        title:'Hello mommy 2',
        subTitle:'Node Js ex 2',
        imageUrl:'/bootstrap/images/2.png'

    },
    {
        title:'Hello mommy 3',
        subTitle:'Node Js ex 3',
        imageUrl:'/bootstrap/images/3.png'

    }
])
*/

//addind data of services in mongo
/*
Service.create([
    {
        icon:'fas fa-stethoscope',
        title:'Provide Best Courses',
        description:'We provide courses that help nobody but enrices our pockets',
        linkText:'www.google.com',
        link:'Check'
    },
    {
        icon:'fas fa-star-of-life',
        title:'Provide Best Courses',
        description:'We provide courses that help nobody but enrices our pockets',
        linkText:'www.google.com',
        link:'Learn'
    }
])
*/
/*
About.create([
    {
        title:"About Me",
        para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis aliquam ipsam voluptas numquam quibusdam! Quaerat facilis ullam"
    }
])
*/

// creating temporary footer in mongodb 
/*
Footer.create([
    {
        year:2025,
        company:'Baba elichi'
    }
])
*/

/*
Pics.create([
    {
        imageUrl:"/bootstrap/images/galleryPic.jpg"
    }
])
*/

//Here we extract the PORT number form env file or if it is not set then use 5566
app.listen(process.env.PORT || 5566 ,()=>{
    console.log("Server Started")
})

