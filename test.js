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

