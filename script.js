let score = 20;

computerGuess = Math.floor(Math.random(20) * 20);
console.log(computerGuess);

const querySel = (qry, result) => {
  document.querySelector(qry).textContent = result;
};

document.querySelector('.Submit').addEventListener('click', function () {
  playerGuess = parseInt(document.querySelector('.guessHuman').value);

  if (playerGuess === computerGuess) {
    win = 'You win';
    document.body.style.backgroundColor = 'blue';
    newScore = score;
    querySel('.maxScore', newScore);
    querySel('.livesLeft', score);
    querySel('.guessCheck', 'YOU WIN! 🤑');
    querySel('.numberComp', `${computerGuess}`);
  } else if (playerGuess > computerGuess) {
    win = 'too high';
    querySel('.livesLeft', --score);
    querySel('.guessCheck', 'Too high 🥶');
  } else if (playerGuess < computerGuess) {
    win = 'too low';
    querySel('.livesLeft', --score);
    querySel('.guessCheck', 'Too low 🥵');
  } else {
    win = 'no number';
    querySel('.livesLeft', --score);
    querySel('.guessCheck', 'Only numbers 👽');
  }
  return;
});

document.querySelector('.try').addEventListener('click', function () {
  computerGuess = Math.floor(Math.random(20) * 20);
  console.log(computerGuess);
  score = 20;
  querySel('.livesLeft', 20);
  querySel('.numberComp', '?');
  document.body.style.backgroundColor = 'rgb(25, 36, 36)';
  querySel('.guessCheck', 'Take a guess 🧠');
  document.querySelector('.guessHuman').value = '';
});
