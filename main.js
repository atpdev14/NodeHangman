var fs = require("fs");
var wordConstructor = require("./wordConstructor.js");
var inq = require("inquirer");
var alreadyGuessed = [];
var allAnswers = ["rudabega", "karaoke", "banana",	 "gameboy", "pumpkin", "pumpernickel", "juniper", "agonized", "repugnant", "besmirch", "deadpan"];
var randy = Math.floor(Math.random() * allAnswers.length);
var display;


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
		guess();
	}
	display = display.join("");
	console.log("New String: " + display);
	win(display, newAnswer.answer);
};


// ===================================
// 		CHECK WIN CONDITION
// =================================== 
function win(display, answer){
	//Checks for win condition and restarts game
	if(display === answer.join("") && totalGuesses > 0){
		console.log("YOU WIN!");
		console.log("");
		console.log("");
		var randy = Math.floor(Math.random() * allAnswers.length);
		var newAnswer = new wordConstructor(allAnswers[randy]);
		newAnswer.print();
		reset();
		guess();
	} 
	//Checks for lose condition and restarts game
	else if(display !== answer.join("") && totalGuesses <= 0){
		console.log("You LOSE!");
		console.log("");
		console.log("");
		var newAnswer = new wordConstructor(allAnswers[randy]);
		newAnswer.print();
		reset();
		guess();
	}
	//Continues current game
	else {
		guess();
	};
};

// ===================================
// 		RESET GAME
// =================================== 
function reset(){
	alreadyGuessed = [];
	var randy = Math.floor(Math.random() * allAnswers.length);
	display = "";
	var totalGuesses = newAnswer.answer.length + 1;
	console.log("Total Guesses: " + totalGuesses);
};

//Create new answer object from constructor
var newAnswer = new wordConstructor(allAnswers[randy]);
newAnswer.print();
display = newAnswer.answerDisplay;

//Designate number of guesses
var totalGuesses = newAnswer.answer.length + 1;
console.log("Total Guesses: " + totalGuesses);


//Start game
guess();



