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

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) return true;

    var check = [];
    const runOnEachNode = (node) => {
        if (node === null) return ;

        runOnEachNode(node.left);
        let result = checkBalanced(node);
        if (result === false) {
            check = [false];
            return;
        }
        check.push(result);
        runOnEachNode(node.right);
    }

    const checkBalanced = (node) => {

        let leftDepth = findMaxDepth(node.left,0);
        let rightDepth = findMaxDepth(node.right,0);
        let diff = Math.abs(leftDepth - rightDepth);
        return diff < 2;
    }



    const findMaxDepth =  (node, height) => {
        if (node === null) return height;

        let heightLeft = findMaxDepth(node.left, height + 1);
        let heightRight = findMaxDepth(node.right, height + 1);
        
        return (heightLeft > heightRight) ? heightLeft: heightRight ;
    }
    runOnEachNode(root);
    check = check.filter(item => item === false);
    if (check.length > 0 ) return false;
    return true;
};