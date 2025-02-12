const http = require('http');
const express = require('express');
const app = require('./app');
const port = process.env.PORT || 3000;
const hostname = '127.0.0.1'


const server = http.createServer(app);


server.listen(port, ()=>{
     console.log(`This server is running on http://localhost:${port}`);
})
