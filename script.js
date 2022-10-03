let score = 20;

computerGuess = Math.floor(Math.random(20) * 20);
console.log(computerGuess);

// const query = function (name) {
//   return document.querySelector(name).textContent;
// };

document.querySelector('.Submit').addEventListener('click', function () {
  playerGuess = parseInt(document.querySelector('.guessHuman').value);

  if (playerGuess === computerGuess) {
    win = 'You win';
    document.body.style.backgroundColor = 'blue';
    newScore = score;
    document.querySelector('.maxScore').textContent = newScore;
    document.querySelector('.livesLeft').textContent = score;
    document.querySelector('.guessCheck').textContent = 'YOU WIN 🤑';
    document.querySelector('.numberComp').textContent = `${computerGuess}`;
  } else if (playerGuess > computerGuess) {
    win = 'too high';
    document.querySelector('.livesLeft').textContent = --score;
    document.querySelector('.guessCheck').textContent = 'Too high 🥶';
  } else if (playerGuess < computerGuess) {
    win = 'too low';
    document.querySelector('.livesLeft').textContent = --score;
    document.querySelector('.guessCheck').textContent = 'Too low 🥵';
  } else {
    win = 'no number';
    document.querySelector('.livesLeft').textContent = --score;
    document.querySelector('.guessCheck').textContent = 'Only numbers 👽';
  }
  return;
});

document.querySelector('.try').addEventListener('click', function () {
  computerGuess = Math.floor(Math.random(20) * 20);
  score = 20;
  document.querySelector('.livesLeft').textContent = 20;
  document.querySelector('.numberComp').textContent = '?';
  document.body.style.backgroundColor = 'rgb(25, 36, 36)';
  document.querySelector('.guessCheck').textContent = 'Take a guess 🧠';
  document.querySelector('.guessHuman').value = '';
});
