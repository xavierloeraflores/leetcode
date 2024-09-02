// LeetCode: 133. Clone Graph
// Blind 75
// link: https://leetcode.com/problems/clone-graph/
// Graph, Depth First Search
// Time: O(V+E)
// Space: O(V)

/**
 * Definition for _Node.
*/
class _Node {
    val: number
    neighbors: _Node[]
    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

function cloneGraph(node: _Node | null): _Node | null {
    if(node == null) return null
    if(node.neighbors.length == 0) return new _Node(node.val)
    const map = new Map()
    const stack:_Node[] = [node]
    let clone = new _Node(0, [])
    let cloneHead:_Node|null = null

    function addNeighbor(targetNode, neiVal){
    function containsNode(targetNode, val){
        let contains = false
        targetNode.neighbors.forEach((nei)=>{
            if(nei.val == val) contains = true
        })
        return contains
    }
        const neighborNode = map.get(neiVal)
        if(!containsNode(targetNode, neighborNode.val))targetNode.neighbors.push(neighborNode)
        if(!containsNode(neighborNode, targetNode.val)) neighborNode.neighbors.push(targetNode)
    }
    while(stack.length>0){
        let cur = stack.pop() as _Node
        let neighbors = cur .neighbors
        clone = new _Node(cur.val)
        map.set(cur.val, clone)
        neighbors.forEach((nei)=>{
            if(!map.has(nei.val) ){
                stack.push(nei)
            }else{
                addNeighbor(clone, nei.val)
            }
        })
    if(cloneHead == null) cloneHead = clone
    }
    return cloneHead
};

function testCloneGraph() {
    function compareGraphs(node1:_Node | null, node2:_Node|null){
        if(node1 == null && node2 == null) return true
        if(node1 == null || node2 == null) return false
        let visited = new Set()
        let stack1 = [node1]
        let stack2 = [node2]
        while(stack1.length>0){
            let cur1 = stack1.pop() as _Node
            let cur2 = stack2.pop() as _Node
            if(cur1.val != cur2.val) return false
            visited.add(cur1.val)
            visited.add(cur2.val)
            if(cur1.neighbors.length != cur2.neighbors.length) return false
            for(let i = 0; i<cur1.neighbors.length; i++){
                let nei1 = cur1.neighbors[i]
                let nei2 = cur2.neighbors[i]
                if(!visited.has(nei1.val) && !visited.has(nei2.val)){
                    stack1.push(nei1)
                    stack2.push(nei2)
                }
            }
        }
        return true
    }
    const testCases = [
        {
            node: {
                val: 1,
                neighbors: [
                ]
            },
            expected: {
                val: 1,
                neighbors: [
                ],
            },
        },
    ];
    for (const { node, expected } of testCases) {
        const result = cloneGraph(node);
        console.log(compareGraphs(result, expected) ? "PASS" : "FAIL", {
            expected,
            result,
        });
    }
}
testCloneGraph();