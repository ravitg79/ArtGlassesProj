/**
 * @author Ravit
 */
var p = document.querySelector('p');
var index = 0;
var sentences = ["Ticking away the moments that make up a dull day", "You fritter and waste the hours in an offhand way. ", "Kicking around on a piece of ground in your home town ", "Waiting for someone or something to show you the way. "];

function toggleText() {
	p.innerHTML = sentences[index];
	index = (index + 1) % sentences.length;
}

window.addEventListener('click', toggleText);

function randFunc() {
	for (var i = 0; i < 3; i++) {
		var randNum = Math.floor((Math.random() * 100) + 1);

		console.log('Randomal Number: ' + randNum);
	}
}

