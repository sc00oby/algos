var generateParenthesis = function(n) {
  const result = []
  function helper(open = n, closed = 0, str = '') {
    while (open > 0) {
      helper(open - 1, closed + 1, str += '(')
      helper(open, closed - 1, str += ')')
    }
  }
  helper(n)
};

console.log(Array(5).fill(')'))
generateParenthesis(1)