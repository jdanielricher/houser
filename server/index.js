require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require('./controller');
const axios = require("axios");

const app = express();


app.use(bodyParser.json());
// massive(process.env.CONNECTION_STRING)
//     .then(db => {
//         app.search("db", db);
//     })
//     .catch(err => {
//         console.log(err);
//     });


const port = process.env.PORT || 3004;




app.listen(port, () => { //error here
    console.log(`Server is listening on port ${port}.`);
});