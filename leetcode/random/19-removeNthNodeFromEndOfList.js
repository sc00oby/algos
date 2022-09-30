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

var removeNthFromEnd = function(head, n) {
    let pointer1 = head
    let pointer2 = head
    //push pointer1 out n times to establish lead
    while (n > 0) {
      pointer1 = pointer1.next
      n -= 1
    }
    //case when n = head (max value)
    if (pointer1 === null) {
      head = head.next
      return head
    }
    //marches pointer1 and pointer2 one node at a time till tail
    while (pointer1.next !== null) {
      pointer1 = pointer1.next
      pointer2 = pointer2.next
    }
    //case when n = 1 (ie tail removal)
    if (pointer2.next === pointer1) {
      console.log('hellow')
      pointer2.next = null
      return head
    }
    //case when we're in between (most cases)
    pointer2.next = pointer2.next.next
    return head
};

const test1 = conversion([1,2,3,4,5])
console.log(removeNthFromEnd(test1, 5))