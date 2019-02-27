//Check Puerto
require('./config/config')

const express = require('express')
const mongoose = require('mongoose');
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded express
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json express body-parser
app.use(bodyParser.json())

//All Rutas express 
app.use( require('./routes/index') )

//Conexion mongoose 
// mongoose.connect('mongodb://localhost:27017/cafe',{ useNewUrlParser: true },(err, res) => {

//     if(err){
//         throw err;
//     }

//     console.log('Base de datos ONLINE!!')

// });
// mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.URLDB,{ useNewUrlParser: true },(err, res) => {

    if(err){
        throw err;
    }

    console.log('Base de datos ONLINE!!')

});
mongoose.set('useCreateIndex', true);


//Puerto
app.listen(process.env.PORT, () => {
    console.log("Escuchando el puerto", process.env.PORT)
})