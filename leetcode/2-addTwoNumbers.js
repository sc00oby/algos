
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }

var addTwoNumbers1 = function(l1, l2) {
  let first = String(l1.val)
  let second = String(l2.val)
  while (l1.next) {
    l1 = l1.next
    first += String(l1.val)
  }
  while (l2.next) {
    l2 = l2.next
    second += String(l2.val)
  }
  first = first.split('').reverse().join('')
  second = second.split('').reverse().join('')
  let sum = Number(first) + Number(second)
  console.log(sum)
  sum = String(sum).split('').reverse().join('')

  let result = new ListNode(Number(sum[0]))
  let tail = result
  for (let i = 1; i < sum.length; i++) {
    tail.next = new ListNode(Number(sum[i]))
    tail = tail.next
  }

  return second
};

var addTwoNumbers = function(l1, l2) {
  const result = new ListNode((l1.val + l2.val) % 10)
  let carryover = l1.val + l2.val > 9 ? 1 : 0
  let tail = result
  let l1Check = true
  let l2Check = true
  while (l1.next || l2.next || carryover) {
    if (l1Check && l1.next) {
      l1 = l1.next
    } else {
      l1Check = false
      l1.val = 0
    }
    if (l2Check && l2.next) {
      l2 = l2.next
    } else {
      l2Check = false
      l2.val = 0
    }
    tail.next = new ListNode((l1.val + l2.val + carryover) % 10)
    tail = tail.next
    carryover = l1.val + l2.val + carryover > 9 ? 1 : 0
    console.log(l1.val, carryover)
  }
  return result
};

function conversion(arr) {
  let result = new ListNode(arr[0])
  let tail = result
  for (let i = 1; i < arr.length; i++) {
    tail.next = new ListNode(arr[i])
    tail = tail.next
  }
  return result
}

[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
let a = conversion([9,9,9])
let b = conversion([9,9])

console.log(addTwoNumbers(a,b))
console.log(0 ? true : false)