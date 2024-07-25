const express = require('express')
const app = express()

//.get method can be used to make a get request to the url '/'
//in Express, we use .send()
app.get('/',(req, res)=>{
    res.status(200).send('Home')
})

//.all method will get us all the methods we can use like post, delete, get etc.
//here it is talking about error 404.
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Not Found</h1>')
})
app.listen(5000)