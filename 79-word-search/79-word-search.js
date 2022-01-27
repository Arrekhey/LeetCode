/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let flag = false
    function searchBoard(rowIndex,columnIndex,index){
       // console.log(rowIndex,columnIndex)
        if(index===word.length-1 && word[index]==board[rowIndex][columnIndex]){
         //   console.log("Hey",rowIndex,columnIndex)
            flag = true
            return
        }
        let letter = word[index]
        if(board[rowIndex][columnIndex]==letter){
            board[rowIndex][columnIndex] = -1
        if(rowIndex+1<board.length && columnIndex>=0 && board[rowIndex+1][columnIndex]!=-1){
            searchBoard(rowIndex+1,columnIndex,index+1)
        }
            if(rowIndex-1>=0 && columnIndex>=0 && board[rowIndex-1][columnIndex]!=-1){
            searchBoard(rowIndex-1,columnIndex,index+1)
        }
            if(rowIndex>=0 && columnIndex-1>=0 && board[rowIndex][columnIndex-1]!=-1){
            searchBoard(rowIndex,columnIndex-1,index+1)
        }
            if(rowIndex>=0 && columnIndex+1<board[0].length && board[rowIndex][columnIndex+1]!=-1){
            searchBoard(rowIndex,columnIndex+1,index+1)
        }
            board[rowIndex][columnIndex] = letter
        }
        
    }

    for (let i=0;i<board.length;i++){
        for (let j=0;j<board[0].length;j++){
            searchBoard(i,j,0)            
        }
    }
    return flag
};