/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let lastIndex = -1
    for (let i=num.length-1;i>=0;i--){
        if(parseInt(num[i])%2!==0){
            lastIndex = i
            break
        }
    }
    return num.substring(0,lastIndex+1)
};