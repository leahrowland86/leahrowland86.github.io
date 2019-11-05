/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/*
CHALLENGES: 
A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
(Hint: always save the previous dice role in a separate variable)
Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
(Hint: you can read that value with the .value property in Javascript. This is a good opportunity to use Google to figure this out.)
Add another dice to the game, so that there are two dices now. The player looses their current score when one of thewm is a 1. 
(Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one)
*/


//declare variables
let 
  globalScore, 
  roundScore, 
  activePlayer, 
  gamePlaying, 
  previousDiceRoll1, 
  input, 
  winningscore, 
  numberOfDice;

  const buttonRoll = document.querySelector('.btn-roll');

//initialize the game
init();

//NUMBER OF DICE event listener
document.getElementById('number-of-dice').addEventListener('change', function() {
  numberOfDice = Number(this.value);
});

//ROLL DICE button event listener and anonymous function
buttonRoll.addEventListener('click', function() {
  if (gamePlaying) {
    if (numberOfDice != 2) {
      numberOfDice = 1;
    }

    //calculate a random number
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    console.log(numberOfDice,dice1,dice2);

    //dispay the result on the DICE
    showDice();
    document.getElementById('dice1').src = 'images/dice-' + dice1 + '.png';
    if (numberOfDice === 2) {
      document.getElementById('dice2').src = 'images/dice-' + dice2 + '.png';
    }

    //A player looses his ENTIRE score when he rolls two 6 in a row.
    if (numberOfDice === 1 && (dice1 === 6 && previousDiceRoll1 === 6)) {
      roundScore = 0;
      globalScore[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      delay();
    } else if (numberOfDice === 2 && (dice1 === 6 && dice2 === 6)) { //A player looses his ENTIRE score when he rolls two 6 at once.
      roundScore = 0;
      globalScore[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      delay();
    } else if (numberOfDice === 1 && dice1 !== 1) { //update the ROUND SCORE IF the rolled number is NOT 1
      //add score
      roundScore += dice1;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else if (numberOfDice === 2 && (dice1 !== 1 && dice2 !== 1)) { //update the ROUND SCORE IF the rolled number is NOT 1
      //add score
      roundScore += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      //delay calls the NextPlayer function after a short delay to see the offending di and remove ROLL DICE button functionality
      delay();
    }

    previousDiceRoll1 = dice1;
  }
});

//HOLD button event listener and anonymous function
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    //add players CURRENT score to players GLOBAL scores
    globalScore[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = globalScore[activePlayer];

//Let the players set their own goal
input = document.querySelector('.winningscore').value;

if (input) {
  winningscore = input;
} else {
  winningscore = 50;
}

    //check if the player won the game
    if (globalScore[activePlayer] >= winningscore) {
      //player wins
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
      hideDice();
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      //next player
      nextPlayer();
    }
  }
})

function delay() {
  buttonRoll.setAttribute("disabled",true);
  setTimeout("nextPlayer()",3000);
  }

function nextPlayer() {
  buttonRoll.removeAttribute("disabled");
  //next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  //set round score to 0 for new ROUND roll
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //use toggle instead of add/remove so it'll keep switching back and forth
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  hideDice();
}

function hideDice() {
  //don't display the result on the DICE
  document.getElementById('dice1').style.display = 'none';
  document.getElementById('dice2').style.display = 'none';
}

function showDice() {
  //dispay the result on the DICE
  document.getElementById('dice1').style.display = 'block';
  if (numberOfDice === 2) {
    document.getElementById('dice2').style.display = 'block';
  }
}

document.querySelector('.btn-rules').addEventListener('click', () => {
  document.getElementById('rules').classList.add('show');
  document.querySelector('.background').classList.add('show');
});

document.getElementById('rules').addEventListener('click', function() {
  this.classList.remove('show');
  document.querySelector('.background').classList.remove('show');
});

//Event Listener for when someone clicks the NEW GAME button, just call the init function
document.querySelector('.btn-new').addEventListener('click', init);

//initialize the game
function init() {
  globalScore = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  //make the dice invisible on the first load
  hideDice();

  //set all current and global scores to 0 on initial load
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  //remove WINNER attributes
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}
