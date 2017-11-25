/* A tic tac toe game for two players. */

class Player {
	constructor(token, color) {
		this.token = token;
		this.color = color;
	}
}

// Tic Tac Toe Game Class
class TicTacToe {
	constructor() {
		this.player1 = new Player('remove-sign', 'blue');
		this.player2 = new Player('unchecked', 'yellow');

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
		this.gameState = [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		];

		// Array of Win States //
		this.winStates = [
			[
				[0, 0],
				[0, 1],
				[0, 2]
			],
			[
				[1, 0],
				[1, 1],
				[1, 2]
			],
			[
				[2, 0],
				[2, 1],
				[2, 2]
			],
			[
				[0, 0],
				[1, 0],
				[2, 0]
			],
			[
				[0, 1],
				[1, 1],
				[2, 1]
			],
			[
				[0, 2],
				[1, 2],
				[2, 2]
			],
			[
				[0, 0],
				[1, 1],
				[2, 2]
			],
			[
				[0, 2],
				[1, 1],
				[2, 0]
			]
		];
	}

	checkForWinner() {
		console.log('Checking for winner.');
		for (let condition of this.winStates) {
			let winningCondition = true;
			for (let position of condition) {
				if (this.gameState[position[0]][position[1]] !== this.currentPlayer.token) {
					winningCondition = false;
				}
			}
			if (winningCondition) {
				console.log('We have a winner!');
				console.log(`Condition is: ${condition}`);
				this.gameStatus = 'won';
				this.winner = this.currentPlayer;

				let winEvent = new Event('win');
				document.dispatchEvent(winEvent);
				return true; // Return a value to stop processing the additional move count check.
			}
		}
		this.moveCount++;
		console.log(`Reviewed move ${this.moveCount}.`);
		if (this.moveCount >= 9) {
			console.log(`This game is a draw at ${this.moveCount} moves.`);
			this.gameStatus = 'draw';

			let drawEvent = new Event('draw');
			document.dispatchEvent(drawEvent);
		}
	}

	checkLegal(event) {
		console.log('Checking if tile is open.');
		let tileX = event.target.dataset.x;
		let tileY = event.target.dataset.y;
		if (this.gameState[tileX][tileY] === null) {
			return true;
		}	else {
			alert('Please choose an empty tile.');
		}
	}

	recordMove(event) {
		console.log('Recording move.');
		let tileX = event.target.dataset.x;
		let tileY = event.target.dataset.y;
		this.gameState[tileX][tileY] = this.currentPlayer.token;
		event.target.setAttribute('class', `tile played glyphicon glyphicon-${this.currentPlayer.token} 
		${this.currentPlayer.color}`);
	}

	switchPlayer() {
		console.log('Switching player.');
		if (this.currentPlayer === this.player1) {
			this.currentPlayer = this.player2;
		} else {
			this.currentPlayer = this.player1;
		}
		this.currentPlayerToken.setAttribute('class', `glyphicon glyphicon-${this.currentPlayerToken}`);
	}
	setUpTileListeners() {
		console.log('Setting up tile listeners.');
		let tileElements = document.querySelectorAll('.tile');
		for (let tile of tileElements) {
			let self = this;
			tile.addEventListener('click', function(event){
				let openTile = self.checkLegal(event);
				if (openTile) {
					handleMove(event);
				}
			});
		}
	}

	showWinScreen() {
		console.log('Now showing win screen.');
		this.winScreen.setAttribute('class', 'show');
		this.winnerToken.setAttribute('class', `glyphicon ${this.winner.token}`);
	}

	showDrawScreen() {
		console.log('Now showing draw screen.');
		this.drawScreen.setAttribute('class', 'show');
	}

	setUpBoard() {
		console.log('Setting up game board.');
		this.gameboard.innerHTML = '';
		for (let i = 0; i < 3; i++) {
			let newRow = document.createElement('div');
			newRow.setAttribute('class', 'row');
			for (let j = 0; j < 3; j++) {
				let newCol = document.createElement('div');
				newCol.setAttribute('class', 'col-xs-3');
				let newTile = document.createElement('span');
				newTile.setAttribute('class', 'tile glyphicon glyphicon-question-sign');
				newTile.dataset.x = i;
				newTile.dataset.y = j;
				newCol.appendChild(newTile);
				newRow.appendChild(newCol);
			}
			this.gameboard.appendChild(newRow);
		}
		this.setUpTileListeners();
	}

	initializeMovePrompt() {
		// This method initializes the `this.movePrompt` element.
		console.log('Initializing Move Prompt.');
		this.startPrompt.setAttribute('class', 'hidden');
		this.movePrompt.setAttribute('class', '');
		this.currentPlayer = this.player1;
		this.currentPlayerToken.setAttribute('class', `glyphicon glyphicon-${this.currentPlayerToken}`);
	}

	start() {
		console.log('Starting game.');
		// Create a new gameboard by calling `this.setUpBoard`
		this.setUpBoard();
		// Initialize the move prompt by calling `this.initializeMovePrompt`.
		this.initializeMovePrompt();
	}
} // End of the Tic Tac Toe Class definition.

let game;

document.addEventListener('DOMContentLoaded', function (event) {
	let startButton = document.querySelector('#start-button');
	startButton.addEventListener('click', function (event) {
		game = new TicTacToe();
		game.start();
	});
});

document.addEventListener('win', function (event) {
	console.log('Detected win event.');
	game.showWinScreen();
});

document.addEventListener('draw', function (event) {
	console.log('Detected draw event.');
	game.showDrawScreen();
});

function handleMove(event) {
	console.log('Handling player move.');
	// Record the move for the current player.
	game.recordMove(event);
	// Check to see if the last move was a winning move.
	game.checkForWinner();
	// Rotate players.
	game.switchPlayer();
}