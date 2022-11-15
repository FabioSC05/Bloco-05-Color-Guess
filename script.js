const guess = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const score = document.getElementById('score');

let value = 0;

const colorRandom = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const rgb = `(${r}, ${g}, ${b})`;
  return rgb;
};

const colorCheck = (event) => {
  if (event.target.style.backgroundColor === `rgb${guess.innerText}`) {
    answer.innerText = 'Acertou!';
    value += 3;
    score.innerText = value;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    value -= 1;
    score.innerText = value;
  }
};

const game = () => {
  const random = Math.round(Math.random() * 5);
  guess.innerText = colorRandom();
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', colorCheck);
    if (index === random) {
      balls[index].style.backgroundColor = `rgb${guess.innerText}`;
    } else {
      balls[index].style.backgroundColor = `rgb${colorRandom()}`;
    }
  }
};

const gameReload = () => {
  answer.innerText = 'Escolha uma cor';
  game();
};

reset.addEventListener('click', gameReload);
game();
