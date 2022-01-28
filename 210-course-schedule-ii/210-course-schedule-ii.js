/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let resultArray = []
    let visitedsSet = new Set()
    let graphMap = new Map()
    for (let i=0;i<prerequisites.length;i++){
        if(graphMap.has(prerequisites[i][0])){
            let temp = graphMap.get(prerequisites[i][0])
            temp.push(prerequisites[i][1])
            graphMap.set(prerequisites[i][0],temp)
        }
        else {
            graphMap.set(prerequisites[i][0],[prerequisites[i][1]])
        }
    }
        function topSort(vertex){
            if(visitedsSet.has(vertex)){
                return false
            }
            let temp = graphMap.get(vertex)
            if(temp==undefined){
                //console.log(vertex)
                if(!resultArray.includes(vertex)){
                    resultArray.push(vertex)
                }
                return true
            }
            visitedsSet.add(vertex)
            for (let i=0;i<temp.length;i++){
             let temp1 =topSort(temp[i])
             if(!temp1){
                 return false
             }
            }
            visitedsSet.delete(vertex)
            graphMap.set(vertex,[])
          //  console.log(vertex,"vertex")
            if(!resultArray.includes(vertex)){
                    resultArray.push(vertex)
                }
            return true
        }
        for (let i=0;i<numCourses;i++){
            if(!topSort(i)){
                return []
            }
        }
        return resultArray
    
    
};