const express = require('express');
const expressLeyouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

// EJS
app.use(expressLeyouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({extended: false}));


// Routes
app.use('/', require('./routes/index'));



const PORT = process.env.PORT || 2100;

app.listen(PORT, console.log(`Server started on port ${PORT}`));