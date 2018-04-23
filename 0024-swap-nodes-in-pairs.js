function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * head 就是第一个节点，所以要处理边界情况
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var node0 = head;
    var node1 = head;
    var node2 = node1 ? node1.next : null;
    var node3 = node2 ? node2.next : null;

    if (node2) {
    	head = node2;
    }

    while (node1 && node2) {
    	node1.next = node3;
    	node2.next = node1;

    	if (node0 !== node1) {
    		node0.next = node2;
    	}

    	node0 = node1;
    	node1 = node3;
    	node2 = node3 ? node3.next : null;
    	node3 = (node2 && node2.next) ? node2.next : null;
    }

    return head;
};


var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);

var res = swapPairs(l1);
while (res) {
    console.log(res.val);
    res = res.next;
}
