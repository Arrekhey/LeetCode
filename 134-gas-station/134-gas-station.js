/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    function forward(index){
        let currentGas = 0
        for (let i=index;i<gas.length;i++){
            currentGas+= gas[i]
            if(currentGas-cost[i]<0){
                return [false,currentGas]
            }
            else {
                currentGas = currentGas-cost[i]   
            }
        }
        return [true,currentGas]
    }
    function backward(remGas,startIndex,endIndex){
        let currentGas = remGas
        for (let i=startIndex;i<endIndex;i++){
            currentGas+= gas[i]
            if(currentGas-cost[i]<0){
                return [false,currentGas]
            }
            else {
                currentGas = currentGas-cost[i]
            }
        }
        return [true,currentGas]
    }
    
    for (let i=0;i<gas.length;i++){
        if(gas[i]>0){
         let tempGas = forward(i)
       if(tempGas[0]){
         let temp =  backward(tempGas[1],0,i)
         if(temp[0]){
             return i
         }
       } 
        } 
    }
    return -1
};