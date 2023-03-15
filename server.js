const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 3000;
app.set('port', port);

server.listen(3000, '193.168.1.74' || 'localhost', function(){
    console.log('Servidor '+ '193.168.1.74:'+ port + ' Iniciado...')
});