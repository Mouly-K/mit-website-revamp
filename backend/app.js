require('dotenv').config();
const express = require('express');
const app = express();
const DBrouter = require('./api/Database/DBrouter');
var cors = require('cors');

app.use(express.json()) 
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/DB', DBrouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on port "+process.env.APP_PORT);
});