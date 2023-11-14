const express = require("express");
const app = express;
const port = 8080;
// const fs = require(fs); //보류
// ReferenceError: Cannot access 'fs' before initialization 에러 발생지점

app.use(express.static("public"));
//TypeError: app.use is not a function 타입 에러 발생, GPT에 질문 요청
//질문
//


app.use('/', (req, res) =>{
  res.sendfile("index.html");
})

app.listen(port, () => {
  console.log(`localhost:${port}`);
});