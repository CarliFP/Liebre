const express = require ("express");
const path = require ("path");
const app = express(); 
const port = Process.env.PORT || 3000;


app.use(express.static("public"));


app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en el puerto 3000'); 
})