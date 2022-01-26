/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length<=1){
        return false
    }
    let stack =[]
    let myMap = new Map()
    myMap.set("(",")")
    myMap.set("{","}")
    myMap.set("[","]")
    for (let i=0;i<s.length;i++){
        if(s[i]=="("||s[i]=="{"||s[i]=="["){
            stack.push(s[i])
        }
        else {
            let temp = stack.pop()
            if(myMap.get(temp)!=s[i]){
                return false
            }
        }
    }
    if(stack.length!=0){
        return false
    }
    return true
};