const http = require('http');

const hostName ='127.0.0.1';   // local host 
const port = 5000;            // port number-> can be anything

// request is something that is coming from the webpage, usually holds
// a lot of information from the body (html) like, username, email, create an 
// account request, etc
// In response we send the things like request accepted, 404 error, 200 ok response
// 500 internal error


http.createServer((request, response)=>{
    response.writeHead(200,{'Content-type': 'text/plain'});
    // send 200 ok response and it is of plain text type
    response.end('Hello World')     
}).listen(port,hostName, ()=>{
    console.log(`server is running at http://${hostName}:${port}/`)
})