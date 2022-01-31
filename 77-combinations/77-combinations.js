/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
 let resultArray =[]   
    function recursive(index,rem,arr){
         if(rem===0){
            resultArray.push([...arr])
            return
        }
        if(index>n){
            return
        }
       
        for (let i=index;i<=n;i++){
            arr.push(i)
            recursive(i+1,rem-1,arr)
            arr.pop()
        }
    }
    recursive(1,k,[])
    return resultArray
};