const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

// Middleware for parsing request body
app.use(express.json());

// Importing Route Handler
const shelterRoutes = require('./routes/shelterRoutes');
app.use('/shelter', shelterRoutes)

const petRoutes = require('./routes/petRoutes');
app.use('/pet', petRoutes)

const accountRoutes = require('./routes/accountRoutes');
app.use('/account', accountRoutes)

mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> {
        console.log('App has connected to database');
        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(`Error connection to the db: ${error}`);
    })
