const express = require('express');
const mongoose =  require('mongoose');
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

// la ruta raiz usa html pelado con sendFile y la carpeta public
app.get ('/',(req,res)=>{
  res.sendFile('index.html');
});

// la ruta garavagno usa plantillas con Pug
app.get('/garavagno', (req, res) => {
  res.render('garavagno', { usuario: 'Santiago', numero: 99 });
});

app.listen(port);
