const express = require("express");
const app = express;
const port = 8080;
// const fs = require(fs); //보류
// ReferenceError: Cannot access 'fs' before initialization 애러 발생지점

app.use(express.static("public"));

app.use('/', (req, res) =>{
  res.sendfile("index.html");
})

app.listen(port, () => {
  console.log(`localhost:${port}`);
});