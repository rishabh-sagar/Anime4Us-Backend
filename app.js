const express = require('express');
const app =express();
const cors = require("cors");
const morgan = require('morgan');
const animelistRouter = require('./routes/animelistRoutes');

//middleware
app.use(express.json());
app.use(cors());
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'));
}





//routes
app.use('/api/v1/list',animelistRouter);








module.exports =app;