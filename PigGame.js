/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

//declare variables
let globalScore, roundScore, activePlayer, gamePlaying;

//initialize the game
init();

//ROLL DICE button event listener and anonymous function
document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {

    //calculate a randon number
    let dice = Math.floor(Math.random() * 6) + 1;

    //dispay the result on the DICE
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';

    //update the ROUND SCORE IF the rolled number is NOT 1
    if (dice !== 1) {
      //add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      //next player
      nextPlayer();
    }
  }
});

//HOLD button event listener and anonymous function
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    //add players CURRENT score to players GLOBAL scores
    globalScore[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = globalScore[activePlayer];

    //check if the player won the game
    if (globalScore[activePlayer] >= 10) {
      //player wins
      document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      //next player
      nextPlayer();
    }
  }
})

function nextPlayer() {
  //next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  //set round score to 0 for new ROUND roll
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //use toggle instead of add/remove so it'll keep switching back and forth
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

//when someone clicks the NEW GAME button, just call the init function
document.querySelector('.btn-new').addEventListener('click', init);

//initialize the game
function init() {
  globalScore = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  //make the dice invisible on the first load
  document.querySelector('.dice').style.display = 'none';

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
