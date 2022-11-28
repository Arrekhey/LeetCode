function maxAreaOfIsland(grid: number[][]): number {
   let maxArea = 0
   let tempArea = 0
   
   function islandArea(rowIndex,columnIndex){
      // console.log(rowIndex,columnIndex,tempArea)
       if(grid[rowIndex][columnIndex]===1){
          tempArea++ 
       }
       grid[rowIndex][columnIndex]=0
       if(rowIndex+1<grid.length && columnIndex>=0 && grid[rowIndex+1][columnIndex]===1){
          
          islandArea(rowIndex+1,columnIndex)
       }
       if(rowIndex-1>=0 && columnIndex>=0 && grid[rowIndex-1][columnIndex]===1){
          islandArea(rowIndex-1,columnIndex)
       }
        if(rowIndex>=0 && columnIndex-1>=0 && grid[rowIndex][columnIndex-1]===1){
          islandArea(rowIndex,columnIndex-1)
       }
       if(rowIndex>=0 && columnIndex+1<grid[rowIndex].length && grid[rowIndex][columnIndex+1]===1){
          islandArea(rowIndex,columnIndex+1)
       }
       //grid[rowIndex][columnIndex]=1
       return tempArea
   }
   
   for (let i=0;i<grid.length;i++){
       for (let j=0;j<grid[i].length;j++){
           if(grid[i][j]===1){
              let result = islandArea(i,j)
             // console.log(result,"This is result")
               if(result>maxArea){
                   maxArea = result
               }
               tempArea = 0
           }
       }
        tempArea = 0
   }
    return maxArea
};