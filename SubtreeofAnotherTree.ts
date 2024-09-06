// LeetCode: 572. Subtree of Another Tree
// link: https://leetcode.com/problems/subtree-of-another-tree/
// Tree, Depth First Search
// Time: O(n*m)
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // Helper Function to compare trees
    function isSameTree(tree1, tree2){
        if(tree1 ===null && tree2===null) return true
        if(!(tree1!=null && tree2!=null)) return false
        if (tree1.val === tree2.val){
            return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
        } 
        return false
    }
    // If subroot is null, then it is a subtree
    if(subRoot ===null) return true
    // If root is null & subRoot is not null, then it is not a subtree
    if(root===null) return false
    // If it is the sameTree, then subRoot is a subTree
    if(isSameTree(root, subRoot)) return true
    // If subRoot is a subtree of either the left or right branch, then it is a subtree
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

function testIsSubTree(){
    const testCases = [
        {
            root: new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5)),
            subRoot: new TreeNode(4, new TreeNode(1), new TreeNode(2)),
            expected: true,
        },
        {
            root: new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0), null)), new TreeNode(5)),
            subRoot: new TreeNode(4, new TreeNode(1), new TreeNode(2)),
            expected: false,
        },
        {
            root: new TreeNode(1, new TreeNode(1), null),
            subRoot: new TreeNode(1),
            expected: true,
        },
        {
            root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            subRoot: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: true,
        },
        {
            root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            subRoot: new TreeNode(1, new TreeNode(2), null),
            expected: false,
        },
        {
            root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            subRoot: new TreeNode(1, null, new TreeNode(3)),
            expected: false,
        },
        {
            root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            subRoot: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: true,
        },
        {
            root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            subRoot: new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), null)),
            expected: false,
        },
        {
            root: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            subRoot: new TreeNode(1, new TreeNode(2), new TreeNode(3, null, new TreeNode(4))),
            expected: false,
        },
    ]

    for(const {root, subRoot, expected} of testCases){
        const result = isSubtree(root, subRoot)
        console.log(result === expected ? 'PASS' : 'FAIL', {root, subRoot, expected, result})
    }
}
testIsSubTree()