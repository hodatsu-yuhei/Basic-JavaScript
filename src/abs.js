// -100から100までの整数 n が与えられるので、絶対値を出力して下さい。

// 例：
// 10
// と入力された場合
// 10
// と出力して下さい。

function abs(inputNumber) {
  return inputNumber < 0 ? inputNumber * -1 : inputNumber;
}

console.log(abs(-10));
