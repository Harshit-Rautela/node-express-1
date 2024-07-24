const http = require('http')

const server = http.createServer((req,res)=>{
    //res.writeHead() is used to write the HTTP response headers.    
    //200 is status code telling operation is successful
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Hello</h1>')
    res.end();
    
})
console.log('Hello')

server.listen(5000)