function checkLotomaniaGame() {
    const gameInput = document.getElementById("game");
    const winningNumbersInput = document.getElementById("winningNumbers");
    const result = document.getElementById("result");
  
    const game = gameInput.value.split(",").map(Number);
    const winningNumbers = winningNumbersInput.value.split(",").map(Number);
  
    let hits = 0;
  
    for (let i = 0; i < game.length; i++) {
      if (winningNumbers.includes(game[i])) {
        hits++;
      }
    }
  
    result.innerHTML = `Você acertou ${hits} números!`;
  }
  