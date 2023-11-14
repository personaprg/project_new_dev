const express = require("express");
const app = express;
const port = 8080;
const fs = require(fs); //보류

app.use(express.static("public"));

app.use('/', (req, res) =>{
  res.sendfile("index.html");
})

