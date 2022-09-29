console.log(2147483648+1)

var reverse1 = function(x) {
  const negative = x < 0 ? true : false
  let result = String( negative ? -x : x).split('').reverse().join('')
  console.log(result)
  result = negative ? -Number(result) : Number(result)
  if (result > 2147483648 + 1 || result < -2147483648) {
    return 0
  } else {
    return result
  }
};


var reverse = function(x, result = [], positive = true) {
  if (result.length === 0) {
    positive = x > 0 ? true : false
  }
  if (x > -1 && x < 1) {
    let newX = 0
    for (let i = 0; i < result.length; i++) {
      newX += result[i] * Math.pow(10 , result.length - i - 1)
    }
    return newX > 2147483648 + 1 || newX < -2147483648 ? 0 : newX
  }
  result.push(x % 10)
  return reverse(positive ? Math.floor(x / 10) : Math.ceil(x / 10) , result, positive)
}


console.log()
console.log(reverse(-45098456098098098))

