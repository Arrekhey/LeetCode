/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    if(n===1){
        return 1
    }
    let pick = 0
      function binarySearch(start,end){
         // console.log(start,end)
          if(start>end){
              return
          }
          let midVal = Math.floor((start+end)/2)
        //  console.log(midVal,"midval")
          let res = guess(midVal)
         // console.log(res,"result")
          if(res===0){
              pick = midVal
              return 
          }
          if(res===-1){
              binarySearch(start,midVal-1)
          }
          if(res===1){
              binarySearch(midVal+1,end)
          }
          
      }
    binarySearch(1,n)
    return pick
};