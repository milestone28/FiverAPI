##installation

[1] npm init -y
[2] yarn add express nodemon
[3] yarn add mongoose
[4] yarn add dotenv //this will add dotevn instead it reads strings
[5] create the models and schema
[6] create routes
[7] create controllers
[8] create auth route
### this will work for the login / register / logout
[9] add the "app.use(express.json())" this will add to allow the body json in the client side.
[10] add bcrypt for the encrpytion for the password. yarn add bcrypt and import it to the auth controller
### This will use for hashing salting
[11] add the token and cookie-parser this will prevent for unauthorize login "yarn add jsonwebtoken cookie-parser"
[12] add middleware folder and create jwt.js middleware this will set middleware each request if is authenticated.
[13] fix the error responce to a proper way add the app.use((err,req,res, next)) in the server.js