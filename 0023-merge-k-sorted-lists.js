/**
 * 23. Merge k Sorted Lists
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) {
    return null;
  } else if (lists.length === 1) {
    return lists[0];
  }

  var res = lists[0];
  for (var i = 1; i < lists.length; i++) {
    res = mergeTwoList(res, lists[i]);
  }

  return res;
};

/**
 * 用于合并两个有序的链表
 */
function mergeTwoList(a, b) {
  if (a === null && b === null) {
    return null;
  } else if (a === null) {
    return b;
  } else if (b === null) {
    return a;
  }

  var root = new ListNode(-1);
  var c = root;
  while(a && b) {
    if (a.val > b.val) {
      c.next = new ListNode(b.val);
      b = b.next;
    } else {
      c.next = new ListNode(a.val);
      a = a.next;
    }
    c = c.next;
  }

  while(a) {
    c.next = new ListNode(a.val);
    c = c.next;
    a = a.next;
  }

  while(b) {
    c.next = new ListNode(b.val);
    c = c.next;
    b = b.next;
  }

  return root.next || null;
}

var a = new ListNode(1);
a.next = new ListNode(3);

var b = new ListNode(2);
b.next = new ListNode(4);
b.next.next = new ListNode(6);
b.next.next.next = new ListNode(8);

var c = mergeTwoList(a, b);
while(c && c.val) {
  console.log(c.val);
  c = c.next;
}


var d = mergeKLists([]);
console.log('[] => ', d);



