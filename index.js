

var firstRandomNum = Math.floor(Math.random()*6) + 1 //Create random num 1-6

var Dice1 = "images/dice-" + firstRandomNum + '.png';

document.querySelectorAll ('img')[0].setAttribute ('src', Dice1);

var secondRandomNum = Math.floor(Math.random()*6) + 1 //Create random num 1-6

var Dice2 = 'images/dice-' + secondRandomNum + '.png';

document.querySelectorAll ('img')[1].setAttribute('src', Dice2);


if (firstRandomNum > secondRandomNum) {
  document.querySelector('h1').innerHTML = 'Player 1 is WINNER!!!';
} else if (firstRandomNum < secondRandomNum) {
  document.querySelector('h1').innerHTML = 'Player 2 is WINNER!!!';
} else {
  document.querySelector('h1').innerHTML = 'DRAW!!!!';
}
