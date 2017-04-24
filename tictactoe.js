var player1;
var player2;
var winner;


var matrix = [['x','o','x'],['x','o',' '],['o',' ',' ']]


const board = () => {
  console.log(`|   ${matrix[0][0]}|   ${matrix[0][1]}|   ${matrix[0][2]}| \n|____|____|____|`)
  console.log(`|   ${matrix[1][0]}|   ${matrix[1][1]}|   ${matrix[1][2]}| \n|____|____|____|`)
  console.log(`|   ${matrix[2][0]}|   ${matrix[2][1]}|   ${matrix[2][2]}| \n|____|____|____|`)
}



const winnerCheck = () => {
  var xCount = 0
  var oCount = 0

  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      if(matrix[i][j] === 'x') xCount ++
      if(matrix[i][j] === 'o') oCount ++
      if(xCount === 3) console.log('x wins')
      if(oCount === 3) console.log('o wins')
    } 
    xCount = 0
    oCount = 0
  }
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      if(matrix[j][i] === 'x') xCount ++
      if(matrix[j][i] === 'o') oCount ++
      if(xCount === 3) console.log('x wins')
      if(oCount === 3) console.log('o wins')
    } 
    xCount = 0
    oCount = 0
  }
}

console.log(board())
console.log(winnerCheck())
// 
// while(!winner) updateBoard()