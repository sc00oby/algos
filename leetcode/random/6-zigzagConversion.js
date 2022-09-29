var convert = function(s, numRows) {
  if (numRows === 1) {
    return s
  }
  let result = ''
  const l = 2 * numRows - 2
  for (let row = 0; row < numRows; row++) {
    const index1 = row
    const index2 = (row === 0 || row === l / 2) ? undefined : l - index1
    for (let i = 0; i < s.length; i++) {
      if ((i - index1) % l === 0) {
        result += s[i]
      }
      if (index2 && (i - index2) % l === 0) {
        result += s[i]
      }
    }
  }
  return result
};

console.log(convert('iloveammardoo', 4))

console.log(0 % 0 ? true : false)