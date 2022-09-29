var isValidSudoku = function(board) {
  const key = {
    0: 2,
    1: 3,
    2: 5,
    3: 7,
    4: 11,
    5: 13,
    6: 17,
    7: 19,
    8: 23,
    9: 29
  }
  const notouch = 2*3*5*7*11*13*17*19*23*29
  const cache = {
    r0: notouch,
    r1: notouch,
    r2: notouch,
    r3: notouch,
    r4: notouch,
    r5: notouch,
    r6: notouch,
    r7: notouch,
    r8: notouch,
    r9: notouch,
    c0: notouch,
    c1: notouch,
    c2: notouch,
    c3: notouch,
    c4: notouch,
    c5: notouch,
    c6: notouch,
    c7: notouch,
    c8: notouch,
    c9: notouch,
    ul: notouch,
    um: notouch,
    ur: notouch,
    ml: notouch,
    mm: notouch,
    mr: notouch,
    bl: notouch,
    bm: notouch,
    br: notouch,
  }
  for (let row = 0; row < board.length; row++) {
    let vertical
    if (row === 0 || row === 1 || row === 2) vertical = 'u'
    if (row === 3 || row === 4 || row === 5) vertical = 'm'
    if (row === 6 || row === 7 || row === 8) vertical = 'b'
    for (let col = 0; col < board[row].length; col++) {
      let horizontal
      if (col === 0 || col === 1 || col === 2) horizontal = 'l'
      if (col === 3 || col === 4 || col === 5) horizontal = 'm'
      if (col === 6 || col === 7 || col === 8) horizontal = 'r'
      if (board[row][col] !== '.') {
        cache[`r${row}`] /= key[board[row][col]]
        if (Math.round(cache[`r${row}`]) !== cache[`r${row}`]) {
          console.log('here')
          return false
        }
        cache[`c${col}`] /= key[board[row][col]]
        if (Math.round(cache[`c${col}`]) !== cache[`c${col}`]) {
          console.log('here')
          return false
        }
        cache[`${vertical}${horizontal}`] /= key[board[row][col]]
        if (Math.round(cache[`${vertical}${horizontal}`]) !== cache[`${vertical}${horizontal}`]) {
          console.log('here')
          console.log(row)
          console.log(col)
          return false
        }
      }
    }
  }

  return true

};
