
/*
For your reference:
const TreeNode = class {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
};
*/
/**
 * @param {TreeNode_int32} root
 * @return {list_list_int32}
 */
function level_order(root) {
  let result = [];
let queue = [];
let size = 1;
let ar = [];
if (!root) return [];
queue.push(root);
while (queue.length > 0) {
 let n = queue.shift();
 ar.push(n.value);
 for(let child of n.children)
 queue.push(child);
 if (size === ar.length) {
   result.push([...ar])
   ar = [];
   size = queue.length;
 }
}
return result;
}
