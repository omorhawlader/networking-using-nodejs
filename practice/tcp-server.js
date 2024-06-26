const net = require('net');

const server = net.createServer((socket)=>{
    console.log("server is connected")
    socket.on('data',(data)=>{
        console.log('server#',data.toString())
    })
    socket.write("hello i am form the server")
})



server.listen(4000,'127.0.0.1',()=> console.log(server.address()))