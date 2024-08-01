const fs = require('fs');

// 응답이 빨리 온 순서대로 출력됨. 그래서 1-2-3-4가 아닐 수 있음 > 비동기적 속성

fs.readFile('readme.txt', 'utf-8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log('1번', data);
});

fs.readFile('readme.txt', 'utf-8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log('2번', data);
});
fs.readFile;

fs.readFile('readme.txt', 'utf-8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log('3번', data);
});
fs.readFile;

fs.readFile('readme.txt', 'utf-8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log('4번', data);
});
fs.readFile;
