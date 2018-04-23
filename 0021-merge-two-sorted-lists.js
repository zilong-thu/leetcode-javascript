
function ListNode(val) {
  this.val = val;
  this.next = null;
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var n1 = l1;
    var n2 = l2;
    var result = new ListNode(null);

    var res = result;

    while(n1 && n2) {
    	if (n1.val > n2.val) {
    		res.next = n2;
    		n2 = n2.next;
    	} else {
    		res.next = n1;
    		n1 = n1.next;
    	}

    	res = res.next;
    }

    if (n1) {
    	res.next = n1;
    }

    if (n2) {
    	res.next = n2;
    }

    return result.next;
};



var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);


var l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);


var res = mergeTwoLists(l1, l2);
while (res) {
    console.log(res.val);
    res = res.next;
}
