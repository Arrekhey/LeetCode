/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let sMap = new Map()
    let pMap = new Map()
    let resultIndices =[]
    for (let i=0;i<p.length;i++){
        if(pMap.has(p[i])){
            let temp = pMap.get(p[i])
            pMap.set(p[i],temp+1)
        }
        else {
            pMap.set(p[i],1)
        }
        if(sMap.has(s[i])){
            let temp = sMap.get(s[i])
            sMap.set(s[i],temp+1)
        }
        else {
            sMap.set(s[i],1)
        }
    }
    
    function compareMap(map1,map2){
        for (let[key,value] of map1.entries()){
            if(map2.has(key)){
                if(map2.get(key)!=map1.get(key)){
                    return false
                }
            }
            else {
                return false
            }
            
        }
        return true
    }
    
    if(compareMap(sMap,pMap)){
        resultIndices.push(0)
    }
    
    let startIndex = 0 
    
    for (let i=p.length;i<s.length;i++){
        if(sMap.has(s[i])){
            let temp = sMap.get(s[i])
            sMap.set(s[i],temp+1)
        }
        else {
            sMap.set(s[i],1)
        }
        if(sMap.has(s[startIndex])){
            let temp = sMap.get(s[startIndex])
            if(temp-1===0){
                sMap.delete(s[startIndex])
            }
            else {
                sMap.set(s[startIndex],temp-1)
            }
        }
      //  console.log(sMap,pMap)
         startIndex++
       let truth = compareMap(sMap,pMap)
       if(truth){
           resultIndices.push(startIndex)
       }
       
    }
    return resultIndices
};