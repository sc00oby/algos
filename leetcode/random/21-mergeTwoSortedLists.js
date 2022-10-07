function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function conversion(arr) {
  let result = new ListNode(arr[0])
  let tail = result
  for (let i = 1; i < arr.length; i++) {
    tail.next = new ListNode(arr[i])
    tail = tail.next
  }
  return result
}

var mergeTwoLists = function(list1, list2) {
  if (!list1) {
    return list2
  } else if (!list2) {
    return list1
  }

  let result = new ListNode(0)
  let tail = result
  let pointer1 = list1
  let pointer2 = list2

  while (pointer1 || pointer2) {
    if (!pointer1) {
      tail.next = pointer2
      pointer2 = null
    } else if (!pointer2) {
      tail.next = pointer1
      pointer1 = null
    } else if (pointer1.val <= pointer2.val) {
      tail.next = new ListNode(pointer1.val)
      tail = tail.next
      pointer1 = pointer1.next
    } else if (pointer2.val < pointer1.val) {
      tail.next = new ListNode(pointer2.val)
      tail = tail.next
      pointer2 = pointer2.next
    } 
  }

  result = result.next
  return result

};

const a = new ListNode(null)
console.log(a)
const b = conversion([1,3,4])
console.log(b)

console.log(mergeTwoLists(a,b))
console.log(null ? true : false)
