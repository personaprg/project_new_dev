//프로젝트 엄수 내용
//1. "check:" 커밋내용 접두사(앞에) check: 라는 정보를 작성해서 어떤 작업을 하고 있는지 구별하게끔 처리할 것
//2. 커밋의 단위는 파일 두개 이상 넘어가서는 안됨

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
  // console.log(bodyData);
  // console.log(path);

//------------------------------------------------------------------------------------------------------------------------//

    // req.body 데이터를 JSON 형태로 변환
    const jsonData = JSON.stringify(bodyData, null, 2);
    /* 1. JSON.stringify()는 JavaScript 객체나 값의 집합을 JSON 문자열로 변환하는 메서드

   [적절한 비유] JSON.stringify(value[, replacer[, space]]); 
   여러분이 가지고 있는 데이터가 노트북의 메모장에 적힌 내용이라고 합시다. 여러 줄에 걸쳐 있는 이 내용을 한 줄짜리 문장으로 변환하려면 어떻게 할까요?
   (필수)value: 노트북에 적힌 내용 자체입니다. 여러분이 변환하고 싶은 데이터가 됩니다.
   (선택)replacer: 노트북에 적힌 내용 중에서 특정한 부분만 선택하고 싶을 때 사용됩니다. 예를 들어, "비밀번호" 같은 중요한 정보를 감출 수 있습니다.
   - null을 전달하면 변형 없이 기본 변환
   (선택)space: 결과 문자열을 어떻게 보여줄지에 대한 포맷을 결정합니다. 들여쓰기를 추가하거나 줄 바꿈을 할 수 있습니다. 이것은 단순히 보기 좋게 만드는 것이며, 실제 데이터에는 영향을 미치지 않습니다.
   - 숫자: 들여쓰기 수준을 나타냅니다. 예를 들어, 2를 사용하면 2칸 들여쓰기가 적용
   - 문자열: 지정된 문자열이 사용되어 해당 문자열로 들여쓰기가 적용됩니다. 예를 들어, ' '은 세 개의 공백 문자로 들여쓰기를 의미
  [정리]const jsonData = JSON.stringify(노트북 메모장 내용, 메모장 내용 선택, 보기 좋게 문자열 편집);


    */

    /* 2. 기본 구문 JSON.stringify(value[, replacer[, space]]);

    */
    
    /* 3. JavaScript 값을 JSON 문자열로 변환하고, 교체 함수가 지정된 경우 선택적으로 값을 바꾸고, 교체 배열이 지정된 경우 지정된 속성만 선택적으로 포함
    
    
    */

    // value (필수 매개변수): JSON 문자열로 변환하려는 JavaScript 객체나 값입니다. 즉 이 프로젝트에서 req.body로 받은 bodyData의 해당.
    // replacer 함수의 역할: -key와 value. 이 함수에서 반환하는 값에 따라 value가 최종 결과에 포함될지 여부가 결정
    // space (선택 사항): 결과 문자열을 보기 좋게 포맷팅하기 위해 추가되는 공백 문자열입니다. 들여쓰기를 설정하거나 공백을 추가하여 가독성을 높일 수 있습니다


    console.log("변환 전 데이터 :" + bodyData)// req.body의 데이터
    console.log("변환 후 데이터 : " + jsonData); //데이터 변환 검증
    // 번환 전 데이터 :[object Object]
    // 변환 후 데이터 : {
    //   "data": "ㅎㅇ"
    // }


    // // data.json 파일에 쓰기
    // const dataFilePath = path.join(__dirname, 'public', 'data.json');
    // fs.writeFile(dataFilePath, jsonData, (err) => {
    //   if (err) {
    //     console.error('Error writing to data.json:', err);
    //     return res.status(500).send('Internal Server Error');
    //   }
    //   res.status(200).send('Data received and saved successfully');
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