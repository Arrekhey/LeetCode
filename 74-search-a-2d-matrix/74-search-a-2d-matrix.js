/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {   
    for (let i=0;i<matrix.length;i++){
        let start = 0 
        let end = matrix[0].length-1
        if(target===matrix[i][start]) return true
        if(target===matrix[i][end]) return true
       // console.log(matrix[i][start],matrix[i][end])
        if(target>matrix[i][start] && target<matrix[i][end]){  
          //  console.log("hello")
            while(start<=end){
              //  console.log(start,end)
                let mid = Math.floor((start+end)/2)
              //  console.log(mid,"mid")
                if(target===matrix[i][mid]){
                    return true
                }
               else if(target<matrix[i][mid]){
                   end = mid-1
                //   console.log(end,"end")
               }
                else if(target>matrix[i][mid]) {
                    start = mid+1
                   // console.log(start,"start")
                }
                else {
                    start++
                    end--
                }
                
            }
            return false
        }
    }
        return false
};