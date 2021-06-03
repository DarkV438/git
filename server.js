const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.json');

mongoose.connect(config.databadeURL);

const app = express();

app.use(express.static('public'));



const schema = new mongoose.Schema({
    new: String,
    szavazatok: Number
});

const model = mongoose.model('Opciok',schema ,'Opciok');

app.use(express.urlencoded());

app.post("/szavazas", function(request, response) {
    console.log(request.body);

    new model({

        nev: request.body.animals,
        szavazatok: 1
    }).save();

    response.redirect("/");
});

app.listen(9000);