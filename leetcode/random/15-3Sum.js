function threeSum1(arr) {
  const result = []
  const memory = {}
  for (let i = 0; i < arr.length; i++) {
    const cache = {}
    const needed = -arr[i]
    for (let k = 0; k < arr.length; k++) {
      if (k !== i) {
        if (cache[arr[k]]) {
          const tempCombo = [arr[i], arr[k], arr[cache[arr[k]][0]]]
          tempCombo.sort()
          const validCombo = `${tempCombo[0]}${tempCombo[1]}${tempCombo[2]}`
          if (!memory[validCombo]) {
            memory[validCombo] = true
            result.push(tempCombo)
          }
        } else {
          cache[needed - arr[k]] = [k]
        }
      }
    }
  }
  return result
}

function twoSum(arr, val) {
  const result = {}
  const cache = {}
  for (let i = 0; i < arr.length ; i++) {
    if (cache[arr[i]]) {
      if (arr[i] < val - arr[i]) {
        if (!result[[arr[i], val - arr[i]]]) {
          result[[arr[i], val - arr[i]]] = [arr[i], val - arr[i]]
        }
      } else {
        if (!result[[val - arr[i], arr[i]]]) {
          result[[val - arr[i], arr[i]]] = [val - arr[i], arr[i]]
        }
      }
    } else {
      cache[val - arr[i]] = true
    }
  }
  return Object.values(result)
}

function threeSum2(arr) {
  const result = {}
  const length = arr.length
  let count = 0
  while (count < length) {
    count += 1
    const tempRemoval = arr.shift()
    const twoSumResult = twoSum(arr, -tempRemoval) 
    if (twoSumResult) {
      twoSumResult.forEach(el => {
        if (tempRemoval < el[0]) {
          el.unshift(tempRemoval)
        } else if (tempRemoval > el[1]) {
          el.push(tempRemoval)
        } else {
          el.splice(1, 0, tempRemoval)
        }
        if (!result[el]) {
          result[el] = el
        }
      })
      arr.push(tempRemoval)
    }
  }
  return Object.values(result)
}

function threeSum3(arr) {
  let allPositive = true
  let allNegative = true
  let zeroCount = 0
  const countObj = {}
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && allPositive) {
      allPositive = false
    }
    if (arr[i] > 0 && allNegative) {
      allNegative = false
    }
    if (arr[i] === 0) {
      zeroCount += 1
    }
    if (!countObj[arr[i]]) {
      countObj[arr[i]] = [1, arr[i]]
    } else {
      countObj[arr[i]] = [2, arr[i]]
    }
  }
  if (allPositive || allNegative) {
    return zeroCount >= 3 ? [[0, 0, 0]] : []
  }
  for (el in countObj) {
    if (countObj[el][0] === 2) {
      newArr.push(countObj[el][1], countObj[el][1])
    } else {
      newArr.push(countObj[el][1])
    }
  }
  if (zeroCount >= 3) {
    newArr.push(0)
  }
  console.log(newArr)
  const result = {}
  function twoSum(skipIndex) {
    let count = 0
    const val = -newArr[skipIndex]
    const cache = {}
    while (count < newArr.length) {
      count += 1
      if (count !== skipIndex) {
        if (!cache[newArr[count]]) {
          cache[val - newArr[count]] = true
        } else {
          const tempSolution = [newArr[count], val - newArr[count], -val]
          tempSolution.sort()
          if (!result[tempSolution]) {
            result[tempSolution] = tempSolution
          }
        }
      }
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    twoSum(i)
  }
  return Object.values(result)
}

function threeSum4(arr) {
  arr.sort()
  const result = []
  const duplicatesA = {}
  function twoSum(skipIndex) {
    if (!duplicatesA[arr[skipIndex]]) {
      duplicatesA[arr[skipIndex]] = true
      const val = -arr[skipIndex]
      const cache = {}
      const duplicatesB = {}
      for (let i = skipIndex + 1; i < arr.length; i++) {
        if (!duplicatesB[arr[i]]) {
          duplicatesB[arr[i]] = true
          if (cache[arr[i]]) {
            result.push([arr[i], val - arr[i], -val])
          } else {
            cache[val - arr[i]] = true
          }
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    twoSum(i)
  }
  return result
}

function threeSum(arr) {
  arr.sort()
  const result = []
  let duplicate
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== duplicate) {
      duplicate = arr[i]
      const cache = {}
      const val = -arr[i]
      for (let j = i + 1; j < arr.length; j++) {
        if (cache[arr[j]] === undefined) {
          cache[val - arr[j]] = true
        } else if (cache[arr[j]]) {
          result.push([-val, val - arr[j], arr[j]])
          cache[arr[j]] = false
        }
      }
    }
  }
  return result
} 


console.log(threeSum([-1,4,2,0,1,3,-3]))

