/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0
    let temp = 0
    for (let i=0;i<accounts.length;i++){
        temp=0
        for (let j=0;j<accounts[i].length;j++){
            temp+= accounts[i][j]
        }
        if(temp>max){
            max = temp
        }
    }
    return max
};