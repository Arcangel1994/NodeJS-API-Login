
//==============
// Puerto
//==============
process.env.PORT = process.env.PORT || 3000;

//==============
// Entorno
//==============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//==============
// Vencimiento del Token
//==============
//60 segundos 
//60 minutos
//1h
process.env.CADUCIDAD_TOKEN = '1h'

//==============
// SECRET SEED
//==============
process.env.SEED = 'este-es-el-seed-desarollo'

//==============
// MongoDB
//==============
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'
}else{
    urlDB = 'mongodb+srv://admin:admin@cluster0-noexx.mongodb.net/test?retryWrites=true'
}

process.env.URLDB = urlDB