// -100から100までの整数 n が与えられるので、絶対値を出力して下さい。

// 例：
// 10
// と入力された場合
// 10
// と出力して下さい。

<script>
'use strict'

var.result = getRandom(-100,100);
console.log(result);

function.getRandom(min,max){
    var random = Math.floor(Math.Random() * (max + 1 - min)) + min;

    return random;
}



</script>
