/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let graphMap = new Map()
    let maxTime = 0
    for (let i=0;i<manager.length;i++){
        if(graphMap.has(manager[i]) && i!=headID){
            let temp = graphMap.get(manager[i])
            temp.push(i)
            graphMap.set(manager[i],temp)
        }
        else if(i!=headID) {
            graphMap.set(manager[i],[i])
            
        }
    }
    function recursive(head,time){
        let temp = graphMap.get(head)
        if(temp===undefined){
            return
        }
        if(time>maxTime){
            maxTime = time
        }
        for (let i=0;i<temp.length;i++){
            recursive(temp[i],time+informTime[temp[i]])
        }
    }
    recursive(headID,informTime[headID])
    return maxTime
};