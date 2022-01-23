/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let myMap = new Map()
    let startIndex = 0 
    let maxLength = 0 
    let tempLength = 0
    for (let i=0;i<s.length;i++){
        if(myMap.has(s[i])){
            let temp = myMap.get(s[i])
            myMap = new Map()
            tempLength = 0
            i = temp
        }
        else {
            myMap.set(s[i],i)
            tempLength++
            if(tempLength>maxLength){
                maxLength = tempLength
            }
        }
    }
    return maxLength
};