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
var arr: number[] = []
function diameterOfBinaryTree(root: TreeNode | null): number {
    arr = [];
    runOnAllNodes(root);
    return Math.max(...arr);
};

const runOnAllNodes = (node) => {
    if (node === null) return;

    
    runOnAllNodes(node.left);
    arr.push(findDiameter(node));
    runOnAllNodes(node.right);

}


const findDiameter = (root): number => {
    let leftDeepest = findDeepest(root.left, 0);
    let rightDeepest = findDeepest(root.right, 0);
    return leftDeepest + rightDeepest;
}
const findDeepest = (node, num): number => {
if (node === null ) {
    return num;
}


let left = findDeepest(node.left, num + 1);
let right = findDeepest(node.right, num + 1);

return (left > right) ? left : right ;
}