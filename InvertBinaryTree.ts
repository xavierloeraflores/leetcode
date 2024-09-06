// LeetCode: 226. Invert Binary Tree
// Blind 75
// link: https://leetcode.com/problems/invert-binary-tree/
// Tree, Depth First Search
// Time: O(n)
// Space: O(n)


/**
 * Definition for a binary tree node.
*/
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if(root == null) return root
    let left = invertTree(root.right)
    let right = invertTree(root.left)
    root.left = left
    root.right = right
    return root
};

function testInvertTree(){
    const testCases = [
        {
            root: new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9))),
            expected: new TreeNode(4, new TreeNode(7, new TreeNode(9), new TreeNode(6)), new TreeNode(2, new TreeNode(3), new TreeNode(1))),
        },
        {
            root: new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            expected: new TreeNode(2, new TreeNode(3), new TreeNode(1)),
        },
        {
            root: new TreeNode(1),
            expected: new TreeNode(1),
        },
        {
            root: null,
            expected: null,
        },
    ]

    function compareTrees(node1:TreeNode | null, node2:TreeNode | null){
        if(node1 == null && node2 == null) return true
        if(node1 == null || node2 == null) return false
        if(node1.val != node2.val) return false
        return compareTrees(node1.left, node2.left) && compareTrees(node1.right, node2.right)
    }

    for(const {root, expected} of testCases){
        const result = invertTree(root)
        console.log(compareTrees(result, expected) ? "PASS" : "FAIL", {
            expected,
            result,
        })
    }



}
testInvertTree()