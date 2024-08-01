// object: 객체
const yjObj = {
  name: '이예지',
  hobbies: ['Piano', 'Golf', 'Movie'],
};

console.log(yjObj);
// string: 문자열
const stryjObj = JSON.stringify(yjObj);
console.log(stryjObj);

// 결과값: object, string
console.log(typeof yjObj);
console.log(typeof stryjObj);

// 결과값: 이예지, undifined
console.log(yjObj.name);
console.log(stryjObj.name);
