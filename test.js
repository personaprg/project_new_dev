//1. 비구조화 할당
const person = { name: 'John', age: 30, city: 'New York' };
//기존 방식
const Name = person.name;
const Age = person.age;
// 비구조화 할당
// const { name, age } = person;

const object = { a: 1 };

const { a, b = 2 } = object;


console.log(a + b); // 1


//배열 비구조화 할당
new newArr = new Array();


const [cat1, dog1, tiger1] = ['CAT', 'DOG', 'TIGER;'];
console.log(cat1);
console.log(dog1);
console.log(tiger1);


//2. path 모듈의 join 메서드

const path = require('path');

const dir1 = 'dir1';
const dir2 = 'dir2';
const filename = 'file.txt';

const fullPath = path.join(__dirname, "public", filename);

console.log(fullPath);

const relativePath = 'dir1/dir2/file.txt';
const absolutePath = path.resolve(relativePath);

console.log(absolutePath);


//3. 객체를 JSON 문자열로 변환
console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}'

console.log(
  JSON.stringify([new Number(3), new String('false'), new Boolean(false)]),
);
// Expected output: '[3,"false",false]'

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] }));
// Expected output: '{"x":[10,null,null,null]}'

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Expected output: '"2006-01-02T15:04:05.000Z"'
