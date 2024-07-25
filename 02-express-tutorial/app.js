//In express, api means setting up an http interface to interact with data
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./people')
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
const authorize = require('./authorize')
let {people}= require('./data')
const {products} = require('./data')

const logger = (req,res,next)=>{
    const {method} = req;
    const {url} = req;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

//.use() will add this middleware logger into every .get() request
//this logger will run/mount for any url in which there is api(also including urls in which anything comes after api)
app.use([logger, authorize])


//.query() method can be used to find which query parameters are in the url(those after ? in the url)

app.listen(5000)