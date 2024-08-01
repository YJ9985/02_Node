const shoudIBuyLotto = new Promise(function (resolve, reject) {
  console.log('나 로또 사도 될까!?');
  setTimeout(() => {
    const rand = parseInt(Math.random() * 10);
    console.log(`나온 숫자는 ${rand}`);

    if (rand >= 5) {
      resolve('아싸! 로또 사자!');
    } else {
      reject('아... 망했어요...');
    }
  }, 3000);
});

// async 활용법
async function lottoAsyncAwait() {
  const data = await shoudIBuyLotto;
  console.log(data);
}

lottoAsyncAwait();

// shoudIBuyLotto
//   .then(function (data) {
//     console.log(data);
//   }) // ; 쓰면 안 됨!!
//   .catch(function (err) {
//     console.log(err);
//   });
