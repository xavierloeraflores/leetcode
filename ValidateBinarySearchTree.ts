// LeetCode: 98. Validate Binary Search Tree
// link: https://leetcode.com/problems/validate-binary-search-tree/
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

function isValidBST(root: TreeNode | null): boolean {
    if(root===null) return true
    function isValid(node, left, right){
        if(node===null) return true
        if(node.val<=left || node.val>=right) return false
        return  isValid(node.left, left, node.val) && isValid(node.right, node.val, right)
    }
    return isValid(root.left, -Infinity, root.val ) && isValid(root.right, root.val, Infinity)
};

function testIsValidBST(){
    const testCases = [
        {
            root: new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            expected: true,
        },
        {
            root: new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6))),
            expected: false,
        }
    ]
    for(const {root, expected} of testCases){
        const result = isValidBST(root)
        console.log(result=== expected ? 'PASS' : 'FAIL', {root, expected, result})
    }
}
testIsValidBST()