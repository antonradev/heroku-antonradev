#!/bin/env node

var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.sendfile('index.html');
});


app.listen(8080, function () {
    console.log('Express server listening on port %d in %s mode', 8080, app.settings.env);
});

