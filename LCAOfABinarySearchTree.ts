// LeetCode: 235. Lowest Common Ancestor of a Binary Search Tree
// link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Tree, Depth First Search
// Time: O(log(n)) or O(h) where h is the height of the tree
// Space: O(1)


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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(p==null || q==null) return null
    let curNode = root
    while(curNode!=null){
        let cur = curNode.val
        // Where there is a split or if one of them is equal to the curNode, return the curNode
        if(p.val<=cur && q.val>=cur || p.val>=cur && q.val<=cur){ return curNode}
        // Traverse to the next node
        if(p.val<cur){
            curNode = curNode.left
        }else if(p.val>cur){
            curNode = curNode?.right 
        } 
    }
    return null
};

function testLowestCommonAncestor(){
    function compareTrees(node1:TreeNode | null, node2:TreeNode | null){
        if(node1 == null && node2 == null) return true
        if(node1 == null || node2 == null) return false
        if(node1.val != node2.val) return false
        return compareTrees(node1.left, node2.left) && compareTrees(node1.right, node2.right)
    }
    const testCases = [
        {
            root: new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(9))),
            p: new TreeNode(2),
            q: new TreeNode(8),
            expected: new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(9))),
        },
        {
            root: new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(9))),
            p: new TreeNode(2),
            q: new TreeNode(4),
            expected: new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
        },
        {
            root: new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            p: new TreeNode(1),
            q: new TreeNode(3),
            expected: new TreeNode(2, new TreeNode(1), new TreeNode(3)),
        },
    ]

    for(const {root, p, q, expected} of testCases){
        const result = lowestCommonAncestor(root, p, q)
        console.log(compareTrees(result, expected) ? 'PASS' : 'FAIL', {root, p, q, expected, result})
    }
}
testLowestCommonAncestor()