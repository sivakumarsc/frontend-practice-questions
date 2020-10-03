window.addEventListener("load", function() {
  let currentPlayer = 'X';
  let gameScores = [];
  let board = document.getElementsByClassName('board')[0];
  let gameResult = document.getElementsByClassName('game-result')[0];
  let gameStatus = document.getElementsByClassName('status')[0];
  let restartBtn = document.getElementsByClassName('restart-game')[0];

  function initGame() {
    currentPlayer = 'X';
    gameScores = new Array(9).fill('');
    gameResult.style.display = 'none';
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
  }

  function updateGameStatus(isWon) {
    if (isWon) {
      gameStatus.innerHTML = `Congrats!!. ${currentPlayer} won the game.`
    } else {
      gameStatus.innerHTML = 'Math drawn.'
    }

    gameResult.style.display = 'block';
  }

  function updateCurrentPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  function checkGameStatus() {
    let validMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let isWon = false;

    for(let i=0; i<=7; i+=1) {
      let [a, b, c] = validMoves[i];

      if (gameScores[a] && gameScores[b] && gameScores[c] &&
        gameScores[a] === gameScores[b] && gameScores[b] === gameScores[c]) {
          updateGameStatus(true);
          isWon = true;
          break;
        }
    }

    if (!isWon) {
      console.log(gameScores)
      let isMoveExists = gameScores.find(score => score === '');

      console.log(isMoveExists)
      if (isMoveExists === undefined) {
        updateGameStatus(false);
        return;
      }
    }

    updateCurrentPlayer();
  }
  
  function handleClick(cell) {
    const index = cell.getAttribute("data-index");

    if (gameScores[index] !== '') {
      return;
    }

    cell.innerHTML = currentPlayer;
    gameScores[index] = currentPlayer;

    checkGameStatus();

    
  }

  board.addEventListener("click", function(e) {
    handleClick(e.target);
  });

  restartBtn.addEventListener("click", function() {
    initGame();
  });

  initGame();
});