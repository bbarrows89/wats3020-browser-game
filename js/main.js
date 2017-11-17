/* A tic tac toe game for two players. */

class Player {
	constructor(token){
		this.token = token;
	}
}

// Tic Tac Toe Game Class
class TicTacToe {
	constructor(){
    this.player1 = new Player('remove-sign');
    this.player2 = new Player('unchecked');

		this.currentPlayer = null;
    this.gameStatus = null;
    this.winner = null;
    this.moveCount = 0;
    
		// Set up DOM elements used in game as Class properties
    this.startPrompt = document.querySelector('#start-prompt');
    this.movePrompt = document.querySelector('#move-prompt');
    this.currentPlayerToken = document.querySelector('#player-token');
    this.gameboard = document.querySelector('#gameboard');
    this.winScreen = document.querySelector('#win-screen');
    this.winnerToken = document.querySelector('#winner-token');
    this.drawScreen = document.querySelector('#draw-screen');

		// Initialize an Array representing the starting state of the game board.
		// This is provided for you. We can access the spaces on the board using
		// (X, Y) coordinates as `this.gameState[x][y]`, which is how the game
		// will check to see if the winner is known.
		this.gameState = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];

		// Array of Win States //
		// If a player has claimed the tile at each of the coordinates listed in
		// one of the win states, then they have won the game.
		this.winStates = [
			[[0,0],[0,1],[0,2]],
			[[1,0],[1,1],[1,2]],
			[[2,0],[2,1],[2,2]],
			[[0,0],[1,0],[2,0]],
			[[0,1],[1,1],[2,1]],
			[[0,2],[1,2],[2,2]],
			[[0,0],[1,1],[2,2]],
			[[0,2],[1,1],[2,0]]
		];
	}

	// This `checkForWinner()` method is provided for you, but you must fill in
	// the event dispatch lines that cause the end game screens to show.
	checkForWinner(){
		for (let condition of this.winStates){
			let winningCondition = true;
			for (let position of condition){
				if (this.gameState[position[0]][position[1]] != this.currentPlayer.token) {
					winningCondition = false;
				}
			}
			if (winningCondition) {
				console.log('We have a winner!');
				console.log(`Condition is: ${condition}`);
				this.gameStatus = 'won';
				this.winner = this.currentPlayer;

				// If we've gotten here, then we need to createa  `win` event and
				// dispatch it.

				// TODO: Create a new event called `winEvent` that will dispatch the signal "win".

				// TODO: Dispatch the winEvent using the `document.dispatchEvent()` method.

				return true; // Return a value to stop processing the additional move count check.
			}
		}
		this.moveCount++;
		console.log(`Reviewed move ${this.moveCount}.`);
		if (this.moveCount >= 9) {
			console.log(`This game is a draw at ${this.moveCount} moves.`);
			this.gameStatus = 'draw';

			// TODO: Create a new event called `drawEvent` that dispatches the signal "draw".

			// TODO: Dispatch the `drawEvent` event.
		}
	}

	recordMove(event){
		// This method handles recording a move in the `this.gameState` property.
		// To record a move, we must accmoplish the following:

		// 1. Find the X, Y coordinates of the tile that was just selected
		// 2. Claim that tile in the `this.gameState` array
		// 3. Set the class attribute of the tile to reflect which player has claimed it

		// TODO: Define a variable called `tile_x` that equals the `data-x` attribute on the `event.target`.

		// TODO: Define a variable called `tile_y` that equals the `data-y` attribute on the `event.target`.

		// TODO: Claim this spot in the `this.gameState` array for the player.

		// TODO: Set the class on the `event.target` to show the player's token. The class
		// should be: `tile played glyphicon glyphicon-${this.currentPlayer.token}`.
	}
	switchPlayer(){
		// This method handles switching between players after each move.
		// It must determine who the current player is, and then switch to the
		// other player. After that, it must set the class on the
		// `this.currentPlayerToken` property to show the proper class.

		// TODO: Make a conditional that checks to see if `this.currentPlayer`
		// is equal to `this.player1` If so, set `this.currentPlayer` to
		// `this.player2`. If not, set `this.currentPlayer` equal to
		// `this.player1`. (You will use an if/else statement to do this.)


		// TODO: Set the `class` attribute on `this.currentPlayerToken` to
		// reflect the current player's token. (Note: You will need to use the
		// proper Glyphicon classes combined with the `this.currentPlayer.token`
		// value.)
	}
	setUpTileListeners(){
		// This method sets up event listeners for tiles. It is called when we
		// start a new game. It must find all the tiles and apply event listeners
		// to them.

		// TODO: Select all of the `.tile` elements into a variable called
		// `tileElements`.

		// TODO: Use a loop to add a "click" event listener to each tile that
		// will call the `handleMove` function whenever a tile is clicked.
	}
	showWinScreen(){
		// This method displays the end game screen for a Win.

		// TODO: Change the `class` attribute on the `this.winScreen` property
		// to "show".

		// TODO: Change the `class` attribute on the `this.winnerToken` property
		// to show the proper winner's token.
	}
	showDrawScreen(){
		// This method displays the end game screen for a Draw.

		// TODO: Set the `class` attribute on the `this.drawScreen` property
		// to "show".
	}
	setUpBoard(){
		// TODO: Clear all content from the existing `this.gameboard` element.
    console.log('Setting up game board.');
		// We must draw the game board by using a loop to create rows with
		// tiles in them. We want to create the same structure as we see in the
		// index.html file.

		// TODO: Create a `for` loop that will loop three times. The counter
		// variable in this loop should be called `i`.
		// TODO: Create a new div element called `newRow

		// TODO: Set the `class` attribute on `newRow` to "row".

		// TODO: Create another `for` loop to make the colums to contain the
		// tiles. This `for` loop should also loop 3 times. The counter
		// variable in this loop should be called `j`.

		// TODO: Create a new `div` element called `newCol`.

		// TODO: Set the `class` attribute on `newCol` to "col-xs-3".

		// TODO: Create a new `span` element called `newTile`.

		// TODO: Set the `class` attribute on `newTile` to equal the
		// placeholder styles ("tile glyphicon glyphicon-question-sign").

		// TODO: Set the `data-x` attribute on the `newTile` element
		// equal to `i`.

		// TODO: Set the `data-y` attribute on the `newTile` element
		// equal to `j`.


		// TODO: Append `newTile` as a child to `newCol`.

		// TODO: Append `newCol` as a child to `newRow`.

		// NOTE: Your second `for` loop should end here.

		// TODO: Append the `newRow` element to `this.gameboard` as a child element.

		// NOTE: Your first `for` loop should end here.

		// TODO: Call `this.setUpTileListeners()` to add event listeners to the
		// `.tile` elements.

	}
	initializeMovePrompt(){
		// This method initializes the `this.movePrompt` element.
    console.log('Initializing Move Prompt.');
		// TODO: Hide the `this.startPrompt` element by setting the `class`
		// attribute to "hidden".

		// TODO: Remove the "hidden" class from the `this.movePrompt` element.

		// TODO: Set `this.currentPlayer` equal to `this.player1`.
        
		// TODO: Set `this.currentPlayerToken` class equal to `glyphicon glyphicon-${this.currentPlayer.token}`
	}
	start(){
    console.log('Starting game.');
		// Create a new gameboard by calling `this.setUpBoard`
    this.setUpBoard();
		// Initialize the move prompt by calling `this.initializeMovePrompt`.
    this.initializeMovePrompt();
	}
} // End of the Tic Tac Toe Class definition.

let game;

document.addEventListener('DOMContentLoaded', function(event){
  let startButton = document.querySelector('#start-button');
  startButton.addEventListener('click', function(event){ 
    game = new TicTacToe();
    game.start();
  });
});


// NOTE: End of the `startButton` event listener here.

// NOTE: End of the "DOMContentLoaded" event listener here.


// TODO: Add an event listener on the `document` object that listens for the
// "win" event signal.

// TODO: In the handler for the "win" event, call the `game.showWinScreen()`
// method to display the winning screen.

// NOTE: End of the "win" event listener.

// TODO: Add an event listener on the `document` object that listens for the
// "draw" event signal.

// TODO: In the handler for the "draw" event, call the `game.showDrawScreen()`
// method to display the tie game screen.

// NOTE: End of the "draw" event listener.

// External function for event listeners provided for you.
function handleMove(event){
	// Record the move for the current player.
	game.recordMove(event);

	// Check to see if the last move was a winning move.
	game.checkForWinner();

	// Rotate players.
	game.switchPlayer();
}
