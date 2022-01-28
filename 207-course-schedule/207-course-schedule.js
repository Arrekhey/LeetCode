/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
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
            return true
        }
        for (let i=0;i<numCourses;i++){
            if(!topSort(i)){
                return false
            }
        }
        return true
};