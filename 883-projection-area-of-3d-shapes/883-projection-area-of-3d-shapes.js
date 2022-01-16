/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let topArea = 0 
    let frontArea = 0
    let sideArea = 0
    let frontMax = 0
    let sideMax = 0 
    for (let i=0;i<grid.length;i++){
        for (let j=0;j<grid[i].length;j++){
            if(grid[i][j]>0){
                topArea++
            }
            if(grid[i][j]>frontMax){
                frontMax = grid[i][j]
                
            }
            if(grid[j][i]>sideMax){
                sideMax = grid[j][i]
              
            }
        }
        frontArea+= frontMax
        frontMax = 0
        sideArea+= sideMax
        sideMax =0
       
    }
    return topArea+frontArea+sideArea
};