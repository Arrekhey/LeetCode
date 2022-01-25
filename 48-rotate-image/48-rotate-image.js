/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length
    
    function recursive(rowIndex,columnIndex,count,val){
      //  console.log(rowIndex,columnIndex,val)
        if(count>4){
          //  console.log("Break")
            return
        }
        let temp = matrix[columnIndex][len-1-rowIndex]
        matrix[columnIndex][len-1-rowIndex] = val
        recursive(columnIndex,len-1-rowIndex,count+1,temp)  
    }
    
    if(len%2===0){
      
        for (let i=0;i<Math.floor(matrix.length/2);i++){
        
        for (let j=i;j<matrix.length-(i+1);j++){
             recursive(i,j,1,matrix[i][j])
        }
   
       
    }
        
    }
    else {

        for (let i=0;i<=Math.floor(matrix.length/2);i++){
        
        for (let j=i;j<matrix.length-(i+1);j++){
             recursive(i,j,1,matrix[i][j])
        } 
    }
    }
    
    return matrix
};