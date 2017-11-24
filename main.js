//create wordConstructor in another file that prints the unsolved answer
//save the hidden answer and revealed answer as global arrays
//create a prompt function in a seperate file that prompts the user to guess a letter
//create a function that takes the user's guess and the unhidden answer as arguments
	//and compares their values to see if the letter exists in the word

// CURRENT STATE
// -Selects an answer from the array and converts it to a display of underscores
// -working on guess js to take user input and compare the user input to the answer to see if the value exists
// -need to incorporate guess.js into main.js

var fs = require("fs");
var wordConstructor = require("./wordConstructor.js");
var inq = require("inquirer");
var answerHidden = "";
var alreadyGuessed = [];
var allAnswers = ["rudabega", "karaoke", "banana",	 "gameboy", "pumpkin", "pumpernickel", "juniper", "agonized", "repugnant", "besmirch", "deadpan"];
var randy = Math.floor(Math.random() * allAnswers.length);

// -Reduce number of Guesses
// -push guess into an array of all Guesses
// -print all Guesses
// -check if user's guess exists in newAnswer.answer
// -if it does exist, update the display value at that index


// ===================================
// 		GAME PLAY
// ===================================
function gamePlay(){
	guess();
	if(answerHidden === newAnswer.answer && totalGuesses > 0){
		console.log("You WIN!");
	}	
};

// ===================================
// 		USER GUESS- Recursive
// ===================================
function guess() {
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
			}else{
				console.log("Game Over!");
			}				

		 });
}

// ===================================
// 		COMPARE FUNCTION
// ===================================
function compareGuess(response){
	totalGuesses--;
	console.log("Guesses Left: " + totalGuesses);
	alreadyGuessed.push(response.userGuess);
	console.log("Already Guessed: " + alreadyGuessed);

	if(newAnswer.answer.indexOf(response.userGuess) > -1){
		for(i = 0; i < newAnswer.answer.length; i++){
			// console.log("Answer I: " + newAnswer.answer[i]);
			// console.log("Answer Display: " + i + " " +  newAnswer.answerDisplay[i]);
			if(response.userGuess === newAnswer.answer[i]){
				console.log(newAnswer.answerDisplay[i]);
				newAnswer.answerDisplay[i] = response.userGuess;
				console.log(newAnswer.answerDisplay[i]);
				console.log(newAnswer.answerDisplay);
			}
		}
	}else{
		console.log("Nope!");
	}
};

//Create new answer object from constructor
var newAnswer = new wordConstructor(allAnswers[randy]);
//Designate number of guesses
var totalGuesses = newAnswer.answer.length + 3;
console.log("Total Guesses: " + totalGuesses);


//Start game
gamePlay();

