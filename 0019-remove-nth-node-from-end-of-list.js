function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var len = getLength(head);

  var prev = head;
  var current = head;
  for (var i = 1; i <= len - n; i++) {
    prev = current;
    current = current ? current.next : null;
  }

  prev.next = current ? current.next : null;

  if (len === 1 && n === 1) {
    return null;
  }

  return head;
};

function getLength(head) {
  var len = 0;

  while(head) {
    len++;
    head = head.next;
  }

  return len;
}


var l1 = new ListNode(1);
// l1.next = new ListNode(2);
// l1.next.next = new ListNode(3);
// l1.next.next.next = new ListNode(4);
// l1.next.next.next.next = new ListNode(5);

var res = removeNthFromEnd(l1, 1);
while (res) {
    console.log(res.val);
    res = res.next;
}