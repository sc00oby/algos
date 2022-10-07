var letterCombinations = function(digits) {
  function pushJoin(result, digit) {
    const newResult = []
    const key = {
      2: ['a','b','c'],
      3: ['d','e','f'],
      4: ['g','h','i'],
      5: ['j','k','l'],
      6: ['m','n','o'],
      7: ['p','q','r','s'],
      8: ['t','u','v'],
      9: ['w','x','y','z']
    }
    result.forEach(el => {
      for (let i = 0; i < key[digit].length; i++) {
        newResult.push(el + key[digit][i])
      }
    })
    return newResult
  }

  let result = ['']
  for (let i = 0; i < digits.length; i++) {
    result = pushJoin(result, digits[i])
  }
  return result
};

var letterCombinations1 = function(digits) {
  const key = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
  }
  
  let result = digits.length ? [''] : []
  for (let i = 0; i < digits.length; i++) {
    console.log(i)
    const newResult = []
    result.forEach(el => {
      for (let j = 0; j < key[digits[i]].length; j++) {
        newResult.push(el + key[digits[i]][j])
      }
    })
    result = newResult
  }
  return result
};

console.log(letterCombinations1('22'))