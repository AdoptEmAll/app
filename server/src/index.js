const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
console.log(process.env.MONGODB_URL)


mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> {
        console.log('App has connected to database');
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(`Error connection to the db: ${error}`);
    })