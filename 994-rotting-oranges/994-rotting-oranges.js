/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let oneCount = 0
    for (let i=0;i<grid.length;i++){
        for (let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                oneCount++
            }
        }
    }
    if(oneCount===0){
        return 0
    }
    let newArray = new Array(grid.length).fill(0).map(()=>new Array(grid[0].length).fill(0))
    for (let i=0;i<newArray.length;i++){
        for (let j=0;j<newArray[i].length;j++){
            if(grid[i][j]===1){
                newArray[i][j] = +Infinity
            }
            else {
                newArray[i][j] ="x"
            }
    }
      
    }
    
    function recursive(rowIndex,columnIndex,time){
       // console.log(rowIndex,columnIndex)
         let temp = grid[rowIndex][columnIndex]
         grid[rowIndex][columnIndex] ="x"
         if(rowIndex+1<grid.length && columnIndex>=0 && grid[rowIndex+1][columnIndex]===1){
            // console.log("yes1")
           newArray[rowIndex+1][columnIndex] = Math.min(newArray[rowIndex+1][columnIndex],time+1)
           recursive(rowIndex+1,columnIndex,time+1)
        }
        if(rowIndex>=0 && columnIndex+1<grid[0].length && grid[rowIndex][columnIndex+1]===1){
           // console.log("yes2")
             newArray[rowIndex][columnIndex+1] = Math.min(newArray[rowIndex][columnIndex+1],time+1)
           recursive(rowIndex,columnIndex+1,time+1)
        }
        if(rowIndex-1>=0 && columnIndex>=0 && grid[rowIndex-1][columnIndex]===1){
           // console.log("yes3")
          newArray[rowIndex-1][columnIndex] = Math.min(newArray[rowIndex-1][columnIndex],time+1)
           recursive(rowIndex-1,columnIndex,time+1)
        }
        if(rowIndex>=0 && columnIndex-1>=0 && grid[rowIndex][columnIndex-1]===1){
           // console.log("yes4")
           newArray[rowIndex][columnIndex-1] = Math.min(newArray[rowIndex][columnIndex-1],time+1)
           recursive(rowIndex,columnIndex-1,time+1)
        }
         grid[rowIndex][columnIndex]= temp
    }
    
     for (let i=0;i<grid.length;i++){
         for (let j=0;j<grid[i].length;j++){
             if(grid[i][j]===2){
                // console.log("Heyyyyy")
                 recursive(i,j,0)
             }
         }
     }
    let max = -Infinity
    
    for (let i=0;i<newArray.length;i++){
        for (let j=0;j<newArray[0].length;j++){
            if(newArray[i][j]===+Infinity){
                return -1
            }
            if(newArray[i][j]!=+Infinity && newArray[i][j]>max){
                max = newArray[i][j]
            }
        }
    }
    return max
};