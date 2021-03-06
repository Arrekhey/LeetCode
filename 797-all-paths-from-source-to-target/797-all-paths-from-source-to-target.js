/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let graphMap = new Map()
    for (let i=0;i<graph.length;i++){
        graphMap.set(i,graph[i])
    }
    let lastVertex = graph.length-1
    let resultArray = []
    
    function traversal(vertex,arr){
        if(vertex===lastVertex){
            resultArray.push(arr)
            return
        }
        let temp = graphMap.get(vertex)
        if(temp==undefined){  
            return
        }
        for (let i=0;i<temp.length;i++){
            arr.push(temp[i])
            traversal(temp[i],[...arr])
            arr.pop()
        }
       
    }
    traversal(0,[0])
return resultArray
};