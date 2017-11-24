var inq = require("inquirer");

// -Reduce number of Guesses
// -push guess into an array of all Guesses
// -print all Guesses
// -check if user's guess exists in newAnswer.answer
// -if it does exist, update the display value at that index

function compareGuess(response){
	//check to see if you can access newAnswer.answer
	console.log(newAnswer.answer);
};

var guess = function() {
	inq.prompt([
		{
			type: "input",
			message: "Guess a letter.",
			name: "userGuess"
		}
		]).then(function(response){
			compareGuess(response);
		 });
}

module.exports = guess;



// totalGuesses--;
// 			console.log("Guesses Left: " + totalGuesses);
// 			alreadyGuessed.push(response.userGuess);
// 			console.log("Already Guessed: " + alreadyGuessed);		
// 			Check if the user already guessed that letter
// 			if(alreadyGuessed.indexOf(response.userGuess) > -1){
// 				console.log("You already guessed that letter.");
// 			 }else {
// 				Loop through all letters of the answer to check if the letter exists
// 				if the letter exists, update the value in the displayed answer
// 				for(i = 0; i < newAnswer.answer.length; i++){
// 					if(response.userGuess === newAnswer.answer[i]){
// 						newAnswer.answerDisplay[i] = response.userGuess;
// 						console.log(newAnswer.answerDisplay);
// 					}
// 				}
// 			}










