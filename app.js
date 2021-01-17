const express = require ("express");
const path = require ("path");
const app = express(); 

//console.log (express)
//console.log (path)
//console.log (app)

app.listen (3000, () => {
    console.log ('Levantando un servidor con Express')
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/404', (req, res) => {
      res.send("Error página no encontrada", 404);
    //console.log ();
});