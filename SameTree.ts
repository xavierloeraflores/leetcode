// LeetCode: 100. Same Tree
// Blind 75
// link: https://leetcode.com/problems/same-tree/
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    function nullCheck(node1,node2){
            if(node1==null && node2==null) return true
            if(node1!=null && node2!=null) return true
            return false
        }
    if(!nullCheck(p,q)) return false
    const stack = [p]
    const map = new Map()
    map.set(p, q)

    while(stack.length>0){
        const nodeP = stack.pop()
        const nodeQ = map.get(nodeP)
        if(nodeP !=null && nodeQ!=null){
            if(nodeP.val != nodeQ.val) return false
            if(nullCheck(nodeP.left, nodeQ.left)){
                stack.push(nodeP.left)
                map.set(nodeP.left, nodeQ.left)
            }else {return false}

            if(nullCheck(nodeP.right, nodeQ.right)){
                stack.push(nodeP.right)
                map.set(nodeP.right, nodeQ.right)
            }else {return false}
        }
    }
    return true
};

function testIsSameTree(){
    const testCases = [
        {
            p: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            q: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: true,
        },
        {
            p: new TreeNode(1, new TreeNode(2), null),
            q: new TreeNode(1, null, new TreeNode(2)),
            expected: false,
        },
        {
            p: new TreeNode(1, new TreeNode(2), new TreeNode(1)),
            q: new TreeNode(1, new TreeNode(1), new TreeNode(2)),
            expected: false,
        },
        {
            p: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            q: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: true,
        },
        {
            p: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            q: new TreeNode(1, new TreeNode(2), new TreeNode(3)),
            expected: true,
        },
    ]

    for(const {p, q, expected} of testCases){
        const result = isSameTree(p, q)
        console.log(result === expected ? 'PASS' : 'FAIL', {p, q, expected, result})
    }
}
testIsSameTree()