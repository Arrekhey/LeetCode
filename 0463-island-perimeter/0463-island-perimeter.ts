function islandPerimeter(grid: number[][]): number {
    let perimeter = 0 
    function addPerimeter(rowIndex,columnIndex){
        let per = 0 
        if(rowIndex+1>=grid.length || grid[rowIndex+1][columnIndex]===0){
            per++
        }
        if(columnIndex+1>=grid[0].length || grid[rowIndex][columnIndex+1]===0){
            per++
        }
        if(rowIndex-1<0 || grid[rowIndex-1][columnIndex]===0){
            per++
        }
        if(columnIndex-1<0 || grid[rowIndex][columnIndex-1]===0){
            per++
        }
        return per
    }
      for (let i=0;i<grid.length;i++){
          for (let j=0;j<grid[i].length;j++){
              if(grid[i][j]===1){
                 perimeter+= addPerimeter(i,j) 
              }
          }
      }
    return perimeter
};