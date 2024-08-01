function displayA() {
  console.log('A');
}
// callback > cb로도 표현 가능
function displayB(callback) {
  setTimeout(() => {
    console.log('B');
    callback();
  }, 2000);
}

function displayC() {
  console.log('C');
}

// 다른 함수가 매개변수로 들어가있음: 콜백함수
displayA();
displayB(displayC);
