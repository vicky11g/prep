/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let result = [];
let queue = [];
let size = 1;
let val = [];
if (!root) return [];
queue.push(root);
let flag = false;
while (queue.length > 0) { 
  let size = queue.length;
  while(size) {
      let n = queue.shift();
      // console.log();
      val = n.val;
      size--;
      if (n.left) queue.push(n.left);
      if (n.right) queue.push(n.right);
  }
  result.push(val);
}
return result;
};