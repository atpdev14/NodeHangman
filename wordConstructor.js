var generateAnswer = function(answer){
	// console.log("generateAnswer function");
	this.answerDisplay = "";
	this.answer = answer;
	this.answer = this.answer.split("");

	this.print = function(){
		 for(i = 0; i < this.answer.length; i++){
		 	this.answerDisplay += "_";
		 }
	console.log(this.answer);
	console.log(this.answerDisplay);
	}
};
module.exports = generateAnswer;
