const http = require('http')
const hostname = '127.0.0.1'
const portname = 5000

http.createServer((request,response)=>{
    response.writeHead(200,{'Content-type':'text.plain'})
    response.end('Hello world is printed in the server that I created')
}).listen(portname,hostname,()=>{
    console.log('Hey there, your server is running !!! ')
})