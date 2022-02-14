/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let countMap = new Map()
  let endIndex = 0
  let maxLength = -Infinity
  
  for (let i=0;i<s.length;i++){
      if(countMap.has(s[i])){
          let temp = countMap.get(s[i])
          while(endIndex<=temp){
              if(countMap.has(s[endIndex])){
                  countMap.delete(s[endIndex])
              }
              endIndex++
          }
          countMap.set(s[i],i)
      }
      else {
          countMap.set(s[i],i)
          maxLength = Math.max(maxLength,i-endIndex+1)
      }
  }
    return maxLength===-Infinity?0:maxLength
};