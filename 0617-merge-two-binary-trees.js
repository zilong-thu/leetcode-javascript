/**
 * 617. Merge Two Binary Trees
 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) {
    return null;
  }
  var val_t1 = t1 && t1.val ? t1.val : 0;
  var val_t2 = t2 && t2.val ? t2.val : 0;
  var res = new TreeNode(val_t1 + val_t2);

  if ((t1 && t1.left) || (t2 && t2.left)) {
    res.left = mergeTrees(t1 && t1.left, t2 && t2.left);
  }

  if ((t1 && t1.right) || (t2 && t2.right)) {
    res.right = mergeTrees(t1 && t1.right, t2 && t2.right);
  }

  return res;
};

var t1 = new TreeNode(1);
t1.left = new TreeNode(3);
t1.right = new TreeNode(2);

var t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);

var res = mergeTrees(t1, t2);
console.log(res);
