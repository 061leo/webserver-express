
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//obtener puerto heroku
const port=process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));
//expres hbs engine
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine', 'hbs');

//helpers
 

app.get('/',(req, res)=> {
 
  res.render('home',{
      nombre:'Leonardo'
      

  });
});
app.get('/about',(req, res)=> {
  res.render('about');
});
 
app.listen(port,()=>{
	console.log(`Escuchando el puerto ${port}`);
});