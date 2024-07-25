const express = require('express')
const path = require('path')
const app = express()

//This middleware function serves static files from the ./public directory.
// This means any files in the public directory can be accessed directly by their path.
app.use(express.static('./public'))

//path.resolve() ensures the correct file path is used regardless of the operating system.
app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})
app.listen(5000)