// LeetCode: 104. Maximum Depth of Binary Tree
// Blind 75
// link: https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Tree, Breadth First Search
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

function maxDepth(root: TreeNode | null): number {
    let result = 0;
    let map = new Map()
    map.set(root, 1)
    const queue = [root]
    while(queue.length>0){
        const curNode = queue.shift()
        const curDepth = map.get(curNode)
        if(curNode!=null){
            if(curDepth>result) result = curDepth
            if(curNode.left != null){
                queue.push(curNode.left)
                map.set(curNode.left, curDepth+1)
            }
            if(curNode.right != null){
                queue.push(curNode.right)
                map.set(curNode.right, curDepth+1)
            }
        }
    }
    return result;
};


function testMaxDepth(){
    const testCases = [
        {
            root: new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
            expected: 3,
        },
        {
            root: new TreeNode(1, null, new TreeNode(2)),
            expected: 2,
        },
        {
            root: null,
            expected: 0,
        },
    ]

    for(const {root, expected} of testCases){
        const result = maxDepth(root)
        console.log(result == expected ? "PASS" : "FAIL", {
            expected,
            result,
        })
    }
}
testMaxDepth()