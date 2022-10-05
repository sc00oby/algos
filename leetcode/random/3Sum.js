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
  const cache = {}
  for (let i = 0; i < arr.length ; i++) {
    if (cache[arr[i]]) {
      console.log(arr[i])
      return [arr[i], val - arr[i]]
    } else {
      cache[val - arr[i]] = true
    }
  }
  return false
}

function threeSum(arr) {
  const result = []
  const length = arr.length
  let count = 0
  while (count < length) {
    count += 1
    const tempRemoval = arr.shift()
    const twoSumResult = twoSum(arr, -tempRemoval) 
    if (twoSumResult) {
      twoSumResult.push(tempRemoval)
      result.push(twoSumResult)
      arr.push(tempRemoval)
    }
  }
  return result
}


const blah = [-1,8,4,-1,2,9,-3]
delete blah.shift()
console.log(blah)
console.log(threeSum([-1,8,4,-1,2,9,-3,-1]))
