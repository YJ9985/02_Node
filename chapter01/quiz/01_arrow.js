const getTriangle = (base, height) => {
  return (base * height) / 2;
};

// {}안의 내용이 한줄일 때, {} 및 return 생략 가능
const getTriangle = (base, height) => (base * height) / 2;

console.log('삼각형의 면적' + getTriangle(5, 2));

const normalFunc = function () {
  console.log(this);
};

const arrowFunc = () => {
  console.log(this);
};

normalFunc();
arrowFunc();
