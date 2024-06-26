const net = require('node:net');


const client = net.createConnection({port:4000,host:'127.0.0.1'},()=>{
    console.log("client connected to server")
    client.write("hello")
});

client.on('data',(data)=>console.log(data.toString()))

// client.on('')