/*
This was version 1, its time complexity is O(n2) which is slow, couldnt
pass all leetcode tests in time. Gotta figure a solution thats more
efficient. But i do believe this works
*/
var maxArea1 = function(height) {
  let max = -Infinity
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = (j - i) * Math.min(height[i], height[j])
      max = max < area ? area : max
    }
  }
  return max
};

/*
why this works isn't something i was able to figure out myself, but rather
i used the 'hints' in the leetcode problem. but I now understand the logic
*/
var maxArea = function(height) {
  let max = -Infinity
  let pointer1 = 0
  let pointer2 = height.length-1
  while (pointer1 !== pointer2) {
    const area = (pointer2 - pointer1) * Math.min(height[pointer1], height[pointer2])
    max = max < area ? area : max
    height[pointer1] >= height[pointer2] ? pointer2 -= 1 : pointer1 += 1
  }
  return max
}

console.log(maxArea([1,8]))