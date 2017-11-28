//create wordConstructor in another file that prints the unsolved answer
//save the hidden answer and revealed answer as global arrays
//create a prompt function in a seperate file that prompts the user to guess a letter
//create a function that takes the user's guess and the unhidden answer as arguments
	//and compares their values to see if the letter exists in the word

// CURRENT STATE
// -Convert display to an array to update values then back to a string to log it
// -currently has throw error.  Can not find module.

var fs = require("fs");
var wordConstructor = require("./wordConstructor.js");
var inq = require("inquirer");
var alreadyGuessed = [];
var allAnswers = ["rudabega", "karaoke", "banana",	 "gameboy", "pumpkin", "pumpernickel", "juniper", "agonized", "repugnant", "besmirch", "deadpan"];
var randy = Math.floor(Math.random() * allAnswers.length);
var display;


// ===================================
// 		GAME PLAY
// ===================================
function gamePlay(){
	if(display === newAnswer.answer && totalGuesses > 0){
		console.log("You WIN!");
	}
	guess();	
};

// ===================================
// 		USER GUESS
// =================================== 
function guess(){
	inq.prompt([
		{
			type: "input",
			message: "Guess a letter.",
			name: "userGuess"
		}
		]).then(function(response){
			compareGuess(response);

			if(totalGuesses > 0){
				gamePlay();
			}else {
				console.log("Game Over!");
			}				

		 });
};

// ===================================
// 		COMPARE FUNCTION
// ===================================
function compareGuess(response){
	totalGuesses = totalGuesses - 1;
	console.log("Guesses Left: " + totalGuesses);
	alreadyGuessed.push(response.userGuess);
	console.log("Already Guessed: " + alreadyGuessed); 

	if(newAnswer.answer.indexOf(response.userGuess) > -1){
		console.log("Correct!");
		display = display.split("");

		for(i = 0; i < newAnswer.answer.length; i++){
			if(response.userGuess === newAnswer.answer[i]){
				display[i] = response.userGuess;
				console.log(display);
			}
		}
	}else{
		console.log("Nope!");
		gamePlay();
	}
	display = display.join("");
	console.log("New String: " + display);
	win(display, newAnswer.answer);
};


//Check for a win condition and start the game over
function win(display, answer){
	if(display === answer.join("") && totalGuesses > 0){
		console.log("YOU WIN!");
		var newAnswer = new wordConstructor(allAnswers[randy]);
		newAnswer.print();
		gamePlay();
	}
};

//Create new answer object from constructor
var newAnswer = new wordConstructor(allAnswers[randy]);
newAnswer.print();
display = newAnswer.answerDisplay;

//Designate number of guesses
var totalGuesses = newAnswer.answer.length + 1;
console.log("Total Guesses: " + totalGuesses);


//Start game
gamePlay();

// gamePlay
// guess
// compareGuess

