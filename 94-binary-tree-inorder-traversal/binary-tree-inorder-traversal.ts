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
 var arr: number[] = [];
function inorderTraversal(root: TreeNode | null): number[] {
    arr = [];
    recurse(root);
    return arr;
};

function recurse(node: TreeNode | null) {
    if (node === null) {
        return;
    }

    recurse(node.left);
    arr.push(node.val);
    recurse(node.right);

}