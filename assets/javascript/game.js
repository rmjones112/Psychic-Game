

// set Var alphabet options
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Setting at zero 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letter = [];
var allLetters = null;


// picks number for comp , use math.floor 
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document
function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letter.join(' ');
}

countGuessesLeft();


// set for when user presses a key 
document.onkeyup = function(event) {
	guessesLeft--;

    //String.fromCharCode() method returns a string created from the specified sequence
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letter.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

    //if, if else or else can be used for W/L
    //use .innerhtml to change the HTML content of a <p> element with id="demo":
    //added alerts for win/lose 
	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
        restart();
        alert("Ah so you have Psychic Abilities too?")
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
        restart();
        alert("Better luck next time")
	}
  };
//restart option so that game will begin again 
  var restart = function() {
	guessesLeft = 9;
	letter = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
