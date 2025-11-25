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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return isSame(p , q);
};

function isSame(node1, node2) { 
    if (node1 === null && node2 !== null) return false;
    else if (node1 !== null && node2 === null) return false;
    else if (node1 === null && node2 === null) return true;
    
    if(node1.val !== node2.val) return false;


    let left = isSame(node1.left, node2.left);
    let right = isSame(node1.right, node2.right);

    return left && right;
}