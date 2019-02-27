# NodeJS-API-Login
Express, BodyParser, Mongoose, JsonWebToken, Underscore, Bcrypt  <br/> <br/>

I do not design only the api url to add information to MongoDB <br/> <br/>

//Login   <br/>
->Post  <br/>
key       value  <br/>
email:    test@gmail.com  <br/>
password: 123456  <br/>
https://nodejsapilogin.herokuapp.com/login  <br/>
Return Token  <br/> <br/>  <br/>

//Get <br/>
->Headers  <br/>
key   <br/>
token: tokenValue  <br/>
https://nodejsapilogin.herokuapp.com/usuario  <br/> <br/>  <br/>

//Post Token  <br/> 
->Headers  <br/>
key   <br/>
token: tokenValue  <br/>
https://nodejsapilogin.herokuapp.com/usuario  <br/>
body -> key  <br/>
        nombre  <br/>
        email  <br/>
        password  <br/> <br/>  <br/>

//Delete Token  <br/>
->Headers  <br/>
key   <br/>
token: tokenValue  <br/>
https://nodejsapilogin.herokuapp.com/usuario/id  <br/> <br/> <br/>

//Put Token <br/>
->Headers <br/>
key  <br/>
token: tokenValue <br/>
https://nodejsapilogin.herokuapp.com/usuario/id <br/>
body -> key <br/>
        nombre <br/>
        email <br/>
        password  <br/>
