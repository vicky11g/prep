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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let result = [];
  let queue = [];
  let size = 1;
  let ar = [];
  if (!root) return [];
  queue.push(root);
  let flag = false;
  while (queue.length > 0) {
    let n = queue.shift();
    // console.log();
    ar.push(n.val);
    if (n.left) queue.push(n.left);
    if (n.right) queue.push(n.right);
    if (size === ar.length) {
      result.push(flag ? [...ar].reverse() : [...ar])
      ar = [];
      size = queue.length;
      flag = !flag;
    }
  }
  return result;
};