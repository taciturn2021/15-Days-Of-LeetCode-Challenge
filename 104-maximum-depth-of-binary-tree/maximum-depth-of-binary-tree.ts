/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    let max = depth(root, 0);

    // return (leftMax > rightMax) ? leftMax+1 : rightMax+1;
    return max;
};


function depth(node: TreeNode|null, counter) {
   if(node === null) { 
    return counter;
   }

   let left = depth(node.left, counter+1)
   let right = depth(node.right, counter + 1)

   return (left > right) ? left : right;


}