# NodeJS-API-Login
Express, BodyParser, Mongoose, JsonWebToken, Underscore, Bcrypt

I do not design only the api url to add information to MongoDB

//Login 
->Post
key       value
email:    test@gmail.com
password: 123456
https://nodejsapilogin.herokuapp.com/login
Return Token

//Get
->Headers
key 
token: tokenValue
https://nodejsapilogin.herokuapp.com/usuario

//Post Token
->Headers
key 
token: tokenValue
https://nodejsapilogin.herokuapp.com/usuario
body -> key
        nombre
        email
        password

//Delete Token
->Headers
key 
token: tokenValue
https://nodejsapilogin.herokuapp.com/usuario/id

//Put Token
->Headers
key 
token: tokenValue
https://nodejsapilogin.herokuapp.com/usuario/id
body -> key
        nombre
        email
        password
