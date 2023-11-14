const express = require('express');
const app = express();

const port = 1008;
// const fs = require(fs); //보류
// ReferenceError: Cannot access 'fs' before initialization 에러 발생지점

app.use(express.static("public"));
//------------------------------------------------------------------------------------------------------------------------//
//TypeError: app.use is not a function 타입 에러 발생, GPT에 질문 요청

//질문
//express 모듈을 이용하여 app.use public이라는 폴더의 파일들을 제공하려고해, 
// 작성한 코드는 app.use(express.static("public")); 이거인데, 
// TypeError: app.use is not a function 이런 에러가 발생했어

//답변
// TypeError: app.use is not a function 오류는 app이라는 객체가 use 메서드를 갖고 있지 않아서 발생한 것으로 보입니다. 
// 이 오류는 일반적으로 express 모듈이 적절하게 임포트되지 않았을 때 발생합니다.

//확인할 사항:
// 1. 코드 상단에 const express = require('express');가 있는지 확인하세요. ("express" 에서 'express'로 수정)
// 2. express 모듈의 버전이 호환되는지 확인하세요. 필요하다면 최신 버전의 express를 설치해보세요. (터미널에 npm install express 입력)
// 3. app 객체가 정확하게 생성되었는지 확인하세요. (const app = express;가 정확히 명시되어있는지 확인)

//------------------------------------------------------------------------------------------------------------------------//

// 검증 완료
app.use('/', (req, res) => {
  res.sendFile("index.html");
})

//------------------------------------------------------------------------------------------------------------------------//
app.listen(port, () => {
  console.log(`서버 오픈 http://localhost:${port}`);
});
//------------------------------------------------------------------------------------------------------------------------//
//Emitted 'error' event on Server instance at: 에러 발생

//질문
// Emitted 'error' event on Server instance at:
//     at emitErrorNT (node:net:1778:8)
//     at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
//   code: 'EADDRINUSE',
//   errno: -4091,
//   syscall: 'listen',
//   port: 8080
// }

// Node.js v18.17.1
// PS C:\Users\Administrator\Desktop\k231114\project_new_dev>
// fwd-i-search: _

//답변
// 1. 포트를 변경하세요: (시도 포트 번호를 1005로 변경)
//------------------------------------------------------------------------------------------------------------------------//