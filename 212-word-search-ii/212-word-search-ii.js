/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
     let wordMap = new Map()
    function searchBoard(rowIndex,columnIndex,word,index){
        if(index>word.length){
            return
        }
        if(index===word.length-1 && word[index]==board[rowIndex][columnIndex]){
            wordMap.set(word,1)
            return
        }
        let letter = word[index]
        if(board[rowIndex][columnIndex]==letter){
            board[rowIndex][columnIndex] = -1
        if(rowIndex+1<board.length && columnIndex>=0 && board[rowIndex+1][columnIndex]!=-1){
            searchBoard(rowIndex+1,columnIndex,word,index+1)
        }
            if(rowIndex-1>=0 && columnIndex>=0 && board[rowIndex-1][columnIndex]!=-1){
            searchBoard(rowIndex-1,columnIndex,word,index+1)
        }
            if(rowIndex>=0 && columnIndex-1>=0 && board[rowIndex][columnIndex-1]!=-1){
            searchBoard(rowIndex,columnIndex-1,word,index+1)
        }
            if(rowIndex>=0 && columnIndex+1<board[0].length && board[rowIndex][columnIndex+1]!=-1){
            searchBoard(rowIndex,columnIndex+1,word,index+1)
        }
            board[rowIndex][columnIndex] = letter
        }
        
    }

    for (let i=0;i<board.length;i++){
        for (let j=0;j<board[0].length;j++){
               for (let k=0;k<words.length;k++){
                   searchBoard(i,j,words[k],0)
               }        
        }
    }
    return [...wordMap.keys()]
};