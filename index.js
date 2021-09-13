import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

console.log("Api key is: " + process.env.API_KEY);

console.log(process.env);

const requestHandler = (req, res) => {
    console.log("request received, making random number!");
    const randomNumber = Math.round(Math.random() * 99999);
    res.end(process.env.API_KEY + "____" + randomNumber.toString())
}

const myServer = http.createServer(requestHandler);

console.log("Server is starting http://localhost:" + process.env.PORT);

myServer.listen(parseInt(process.env.PORT));