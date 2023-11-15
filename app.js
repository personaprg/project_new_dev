const express = require('express'); //express 모듈을 가져와 사용하는 것
//------------------------------------------------------------------------------------------------------------------------//
const { join } = require('path'); //"비구조화 할당"이라고 하는데, path 모듈의 join 메소드만 사용하기 위해서 사용한다고 한다.
const path = require('path')//Node.js에서 제공하는 내장 모듈 
//path모듈을 사용할 경우 2가지 패턴을 발견했는데, 
//------------------------------------------------------------------------------------------------------------------------//

const app = express();//express 모듈을 app에 넣는 패턴도 상대적으로 많이 사용
const port = 1008;//portnum 미리 정의(아래에서 직접 넣는 것 보다 이런식으로 미리 정의하는 패턴을 많이 사용)

const bodyParser = require('body-parser');
//Express 앱에서 HTTP 요청의 본문(body)을 쉽게 파싱하도록 도와주는 라이브러리

app.use(express.static('public'));
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/data', (req, res) => {
  //[검증완료] path 모듈의 개념과 join 메소드를 사용하여 절대 경로를 얻었음(주소는 아래 주석 3번의 해당함)
  const index = path.join(__dirname, "public", "index.html");
  //1. path : Node.js에서 제공하는 내장 모듈 중 하나로, 파일 경로와 관련된 여러 유틸리티 함수를 제공
  //join: [Function: join]
 
  //2. join : path 모듈의 메서드 중 하나, 여러 경로를 결합하여 하나의 경로로 만든다고 하는데 
  //예를들어 서울 대구 부산 광주 이런 지역에서 유성으로 올 경우 유성 톨게이트를 통과해야하는 것과 같은 것 같다.

  //3. path.join : "public", "index.html"이라는 세 부분을 결합하여 하나의 절대 경로를 생성
  //[console 찍어본 결과] C:\Users\Administrator\Desktop\k231114\project_new_dev\public\index.html <- 여기서 핵심은 "리터럴 값 3개", "__dir을 왜 사용해야만 했는가?"
  res.sendFile(index);

  //[검증완료] bodyData의 post방식으로 보낸 body의 데이터가 sumbit에 반응하여 데이터 전달 되었음
  const bodyData = req.body;
  console.log(bodyData);
  console.log(path);

//------------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------------------------------//


});




// 질문
// TypeError: path must be absolute or specify root to res.sendFile 오류 발생

// 답변
//상대 경로 사용 시 root 옵션 설정:__dir 경로를 설정하고 join을 이용해 경로를 합쳐야 한다. 이때 path 모듈을 사용해 지정하는 방식
//절대 경로 사용: 

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