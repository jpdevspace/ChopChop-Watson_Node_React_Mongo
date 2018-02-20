// DOM Caching
const recipesResult = document.getElementById('output');
const hintsList = document.getElementById('hint');

// Chrome support for speech recognition
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition  // Controller interface for the recognition service.
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList   // List of SpeechGrammar objects
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent // Event object

// Grammar we want our app to recognize
const ingredients = [ 'chicken' , 'meat' , 'pasta', 'fish', 'tuna', 'salmon', 'rice', 'potatoes', 'spaghetti'];
const grammar = `#JSGF V1.0; grammar ingredients; public <ingredient> =${ingredients.join(' | ')};`;

// Plugging grammar into speech recognition
    // speech recogntion instance to control the recognition for our app
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

    // Setting up options
recognition.grammars = speechRecognitionList;
//recognition.continuous = false; Sometimes this breaks the app.. try it
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// Starting the speech recognition
let ingredientsHTML= '';
ingredients.forEach((value, index, a) => {
  console.log(value, index);
  ingredientsHTML += `<li>${value}</li>`;
});
hintsList.innerHTML = `Try any of the following ingredients for your future recipe <ul>${ingredientsHTML}</ul>`;

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive an ingredient command.');
}

// Receiving and handling results
recognition.onresult = event => {
    const last = event.results.length - 1;
    const ingredient = event.results[last][0].transcript;
    
    // Display results
    recipesResult.textContent = `Result received: ${ingredient}`;
    console.log(`Confidence: ${event.results[0][0].confidence}`);
}

// Speed recognition ends when one word is recognized
recognition.onspeechend = () => recognition.stop();

// Handling errors and unrecognized speech
recognition.onnomatch = event => diagnostic.textContent = 'I didnt recognise that ingredient.';
    // If there's an error show it
recognition.onerror = event => diagnostic.textContent = `Error occurred in recognition: ${event.error}`;