/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0
    let sum = 0
    function DFS(rowIndex,columnIndex){ 
        if(sum>max){
            max = sum
        }
        grid[rowIndex][columnIndex] = "X" 
        let temp = grid[rowIndex][columnIndex]
        if(rowIndex+1<=grid.length-1 && columnIndex>=0){
            if(grid[rowIndex+1][columnIndex]===1){
                sum++ 
                DFS(rowIndex+1,columnIndex)
                grid[rowIndex][columnIndex]=temp
            }
        }
        if(rowIndex>=0 && columnIndex+1<=grid[0].length-1){
            if(grid[rowIndex][columnIndex+1]===1){
                sum++
                DFS(rowIndex,columnIndex+1)
                grid[rowIndex][columnIndex]=temp
            }
        }
        if(rowIndex-1>=0 && columnIndex>=0){
            if(grid[rowIndex-1][columnIndex]===1){
                sum++ 
                DFS(rowIndex-1,columnIndex)
                grid[rowIndex][columnIndex]=temp
            }
        }
        if(rowIndex>=0 && columnIndex-1>=0){
            if(grid[rowIndex][columnIndex-1]===1){
                sum++
                DFS(rowIndex,columnIndex-1)
                grid[rowIndex][columnIndex]=temp
            }
        }
    }
    for (let i=0;i<grid.length;i++){
        for (let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                sum=1
                DFS(i,j)
            }
        }
    }
    return max
};