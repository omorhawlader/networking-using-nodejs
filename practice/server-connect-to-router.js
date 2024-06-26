const http = require('http');
const path = require('path');
const fs = require('fs');



const server = http.createServer((req,res)=>{
    const filePath = path.join(__dirname,'index.html');
    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.writeHead(500,{"Content-Type": "text/plain"});
            res.end('500 internal server err')
            return;
        }
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(data);
    })
})

server.listen(8000,'192.168.1.102',()=> console.log(`server is running to the port number 8000`))