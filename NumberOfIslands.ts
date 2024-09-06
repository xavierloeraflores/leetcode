// LeetCode: 200. Number of Islands
// Blind 75
// link: https://leetcode.com/problems/number-of-islands/
// Graph, Depth First Search
// Time: O(n*m)
// Space: O(n*m)


function numIslands(grid: string[][]): number {
    let numIslands = 0
    const rowLen = grid.length
    if(rowLen === 0) return numIslands
    const colLen = grid[0].length
    const visited = new Set()
    
    // Iterate over the grid
    for(let row = 0; row<rowLen; row++){
        for(let col = 0; col< colLen; col++){
            let posStr = `${row},${col}`
            if(!visited.has(posStr) && grid[row][col] === '1'){
                dfsNumIslands([row,col])
            }
        }
    }
    function dfsNumIslands(pos){
        const moves = [[1,0],[-1,0],[0,1],[0,-1]];
        const stack = [pos]
        while(stack.length>0){
            // Set Cur as Visited
            const cur = stack.pop()
            const curStr = `${cur[0]},${cur[1]}` 
            visited.add(curStr)

            // Push Valid Positions
            moves.forEach((move)=>{
                const newRow =  cur[0]+move[0]
                const newCol =  cur[1]+move[1]
                const newPosStr = `${newRow},${newCol}`
                if(!visited.has(newPosStr) && grid[newRow]!=null && grid[newRow][newCol]==='1'){
                    stack.push([newRow, newCol])
                }
            })
        }
        numIslands++;
    }
    return numIslands
};

function testNumIslands() {
    const testCases = [
        {

            grid:[
                ["1", "1", "1", "1", "0"],
                ["1", "1", "0", "1", "0"],
                ["1", "1", "0", "0", "0"],
                ["0", "0", "0", "0", "0"],
            ],
            expected:1,
        },
        {
            grid:[
                ["1", "1", "0", "0", "0"],
                ["1", "1", "0", "0", "0"],
                ["0", "0", "1", "0", "0"],
                ["0", "0", "0", "1", "1"],
            ],
            expected:3,
        },
    ];
    for (const {grid, expected} of testCases) {
        const result = numIslands(grid);
        console.log(result === expected ? "PASS" : "FAIL", {
            grid,
            expected,
            result,
        });
    }
}
testNumIslands();