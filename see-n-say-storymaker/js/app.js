// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

var textToSpeak = '';
var speakButton = document.getElementById('speakButton');

var nouns = ['dog', 'Konosuke', 'bird', 'kaity', 'Sam' , 'Smith'];
var verbs = ['runs', 'jumps', 'flies', 'drives', 'grows'];
var adjectives = ['cold', 'small', 'fast', 'slow', 'tall'];
var secondNouns = ['house', 'mountain', 'river', 'forest', 'sky'];
var places = ['park', 'beach', 'city', 'village', 'desert'];

var chosenNoun = '';
var chosenVerb = '';
var chosenAdjective = '';
var chosenSecondNoun = '';
var chosenPlace = '';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function chooseRandomWord(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function updateTextToSpeak() {
	textToSpeak = `${chosenNoun} ${chosenVerb} ${chosenAdjective} ${chosenSecondNoun} ${chosenPlace}`;
	document.getElementById('speakButton').innerText = `Speak: ${textToSpeak}`;
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById('nounButton').onclick = function() {
	chosenNoun = chooseRandomWord(nouns);
	updateTextToSpeak();
}

document.getElementById('verbButton').onclick = function() {
	chosenVerb = chooseRandomWord(verbs);
	updateTextToSpeak();
}

document.getElementById('adjectiveButton').onclick = function() {
	chosenAdjective = chooseRandomWord(adjectives);
	updateTextToSpeak();
}

document.getElementById('secondNounButton').onclick = function() {
	chosenSecondNoun = chooseRandomWord(secondNouns);
	updateTextToSpeak();
}

document.getElementById('placeButton').onclick = function() {
	chosenPlace = chooseRandomWord(places);
	updateTextToSpeak();
}

// Onclick handler for the button that speaks the text contained in the variable textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

