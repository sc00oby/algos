console.log('hello')
function myAtoi(s) { 
  const nums = []
  let onlySpaces = true
  let numberZone = false
  let positive = true
  for (let i = 0; i < s.length; i++) {
    if (onlySpaces && s[i] !== ' ') {
      onlySpaces = false
      if (s[i] === '-') {
        positive = false
        numberZone = true
      }
      if (s[i] === '+') {
        numberZone = true
      }
      if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
        numberZone = true
        nums.push(s.charCodeAt(i) - 48)
      }
    } else {
      if (numberZone) {
        if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
          nums.push(s.charCodeAt(i) - 48)
        } else {
          numberZone = false
        }
      }
    }
  }

  let result = 0
  for (let i = 0; i < nums.length; i++) {
    result += nums[i] * Math.pow(10 , nums.length - 1 - i)
  }
  result = positive ? result : -result
  if (result < -Math.pow(2, 31)) {
    result = -Math.pow(2, 31)
  }
  if (result > Math.pow(2, 31) - 1) {
    result = Math.pow(2, 31) - 1
  }
  return result
};

console.log(myAtoi('.1'))
console.log(Math.pow(2, 31))
// console.log('sdf'.charCodeAt(3))

//'    -76565jkhgkj'