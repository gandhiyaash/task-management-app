// Express server config using Node.js


/*
The Express server is created.
JSON middleware is set up to handle incoming JSON data.
Route configurations are applied using the configRoutes function.
The server starts listening on port 3000.
Once the server is successfully running, it logs "Hello World from Express Server" to the console.
*/

import express from 'express';
import configRoutes from './routes/index.js'

// Line creates an instance of express application and 
// returns the application which allows us to use various features and middleware provided by Express

const app = express();

// The below line is a built in middleware in Express that parses incoming request with payloads
// JSON payload refers to the data transmitted in an HTTP request or response body using JSON format
// JSON is lightweight data interchange format that is easy to read and write by both humans and machines

app.use(express.json());

// function responsible for setting up the routes
//used to keep routes configs into different files to keep the code organized

configRoutes(app);

//app.listen() is used to bind and listen to connections on the specified host and port

app.listen(3000, () =>{
    console.log("Hello World from Express Server")
})