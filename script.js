var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// Grammar we want our app to recognize
var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral'];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

// Plugging grammar into speech recognition
    // speech recogntion instance to control the recognition for our app
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

    // Setting up options
recognition.grammars = speechRecognitionList;
//recognition.continuous = false; Sometimes this breaks the app.. try it
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');


// Starting the speech recognition
var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try '+ colorHTML + '.';

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

// Receiving and handling results
recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var color = event.results[last][0].transcript;
    diagnostic.textContent = 'Result received: ' + color + '.';
    bg.style.backgroundColor = color;
    console.log('Confidence: ' + event.results[0][0].confidence);
}

// Speed recognition ends when one word is recognized
recognition.onspeechend = function() {
    recognition.stop();
}

// Handling errors and unrecognized speech
recognition.onnomatch = function(event) {
    diagnostic.textContent = 'I didnt recognise that color.';
}
    // If there's an error show it
recognition.onerror = function(event) {
    diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}