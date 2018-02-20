+function($) {
    $(function() {
        const cheffW = {
            ingredients: [ 'chicken' , 'meat' , 'pasta', 'fish', 'tuna', 'salmon', 'rice', 'potatoes', 'spaghetti'],
            init() {
                this.domCache();
                this.eventBinding();
                this.loadIngredientsList();
            },
            domCache() {
                this.searchBtn = $('button.btn');
                this.recipesResult = $('#output');
                this.hintsList = $('#hintsList');
            },
            eventBinding() {
                this.searchBtn.on('click', this.startRecognition.bind(this));

            },
            loadIngredientsList() {
                // Starting the speech recognition
                let ingredientsHTML= '';
                this.ingredients.forEach((value, index, a) => {
                    console.log(value, index);
                    ingredientsHTML += `<li>${value}</li>`;
                });
                hintsList.innerHTML = `Try any of the following ingredients for your future recipe <ul>${ingredientsHTML}</ul>`;

            },
            startRecognition() {
                // Chrome support for speech recognition
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;  // Controller interface for the recognition service.
                var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;   // List of SpeechGrammar objects
                var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent; // Event object
                // Grammar we want our app to recognize
                console.log(this.ingredients);
                const grammar = `#JSGF V1.0; grammar ingredients; public <ingredient> =${this.ingredients.join(' | ')};`;
                
                // speech recogntion instance to control the recognition for our app
                const recognition = new SpeechRecognition();
                // Plugging grammar into speech recognition
                const speechRecognitionList = new SpeechGrammarList();
                speechRecognitionList.addFromString(grammar, 1);
                // Setting up options
                recognition.grammars = speechRecognitionList;
                recognition.lang = 'en-US';
                recognition.interimResults = false;
                recognition.maxAlternatives = 1;
                
                // Start recognition!!!
                recognition.start();
                console.log('Ready to receive an ingredient command.');


                // Receiving and handling results
                recognition.onresult = event => {
                    const last = event.results.length - 1;
                    const ingredient = event.results[last][0].transcript;
                    console.log(ingredient);
                    // Display results
                    this.recipesResult.html(ingredient)
                    console.log(`Confidence: ${event.results[0][0].confidence}`);
                }

                // Speed recognition ends when one word is recognized
                recognition.onspeechend = () => recognition.stop();

                // Handling errors and unrecognized speech
                recognition.onnomatch = event => diagnostic.textContent = 'I didnt recognise that ingredient.';
                    // If there's an error show it
                recognition.onerror = event => diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
            }
        }

        cheffW.init();
    });
}(jQuery)




