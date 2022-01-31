/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0
    let sum = 0
    function DFS(rowIndex,columnIndex){ 
        // console.log("rowIndex",rowIndex,"ColumnIndex",columnIndex)
       
     if(rowIndex<0||columnIndex<0||rowIndex>=grid.length||columnIndex>=grid[0].length||grid[rowIndex][columnIndex]!=1){
       //  console.log("yes")
         return 0
     }
         grid[rowIndex][columnIndex]="x"
    //  console.log("rowIndex",rowIndex,"ColumnIndex",columnIndex,"-----------")
         let top = DFS(rowIndex-1,columnIndex)
        // console.log(top,"top")
         let bottom = DFS(rowIndex+1,columnIndex)
       //  console.log(bottom,"bottom")
         let left = DFS(rowIndex,columnIndex-1)
       //  console.log(left,"left")
         let right = DFS(rowIndex,columnIndex+1)
      //   console.log(right,"right")
         let count = 1+top+bottom+left+right
      //   console.log(count,"Couuuuuunt")
     //    console.log(rowIndex,columnIndex,"+++++++++++")
      //   console.log(top,bottom,left,right)
      //   console.log(count,rowIndex,columnIndex)
         return count
    }
    for (let i=0;i<grid.length;i++){
        for (let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){ 
                let temp = DFS(i,j)
             max=  Math.max(1,temp,max)
           
            }
        }
    }
    return max
};