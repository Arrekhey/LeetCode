/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let numberofIslands = 0 
    let flag = true
    function recursive(rowIndex,columnIndex){   
        grid2[rowIndex][columnIndex] ="x"
        if(rowIndex+1<grid2.length && columnIndex>=0 && grid2[rowIndex+1][columnIndex]===1){
            if(grid1[rowIndex+1][columnIndex]===1){
                recursive(rowIndex+1,columnIndex)
            }
            else {
                flag = false
               // return
            }
            
            
        }
        if(rowIndex>=0 && columnIndex+1<grid2[0].length && grid2[rowIndex][columnIndex+1]===1){
            if(grid1[rowIndex][columnIndex+1]===1){
                recursive(rowIndex,columnIndex+1)
               }
            else {
                flag = false
               // return
            }
           
           
        }
        if(rowIndex-1>=0 && columnIndex>=0 && grid2[rowIndex-1][columnIndex]===1){
            if(grid1[rowIndex-1][columnIndex]===1){
              recursive(rowIndex-1,columnIndex)  
            }
            else {
                flag = false
               // return
            }
           
            
        }
        if(rowIndex>=0 && columnIndex-1>=0 && grid2[rowIndex][columnIndex-1]===1){
            if( grid1[rowIndex][columnIndex-1]===1){
                 recursive(rowIndex,columnIndex-1)
            }
            else {
                flag = false
              //  return
            }
           
        }
    }
    
    
    for (let i=0;i<grid2.length;i++){
        for (let j=0;j<grid2[0].length;j++){
            if(grid2[i][j]===1 && grid1[i][j]===1){
                flag = true
               recursive(i,j)
                if(flag){
                   numberofIslands++
                }
            }
        }
    }
    return numberofIslands
};