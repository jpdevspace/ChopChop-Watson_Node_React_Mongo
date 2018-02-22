import React, { Component } from 'react';
import './App.css';

// Components
import SearchForm from './SearchForm';
import SearchResult from './SearchResults';

// Utils
import API from '../utils/API';

class App extends Component {
  state = {
    recipes: []
  }

  // Activate SpeechRecognition on page load to always be listening
  componentDidMount() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.interimResults = false;

    recognition.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript);
      // Check for keywords
      const ingredients = ['chicken', 'beef', 'pasta', 'fish'];

      // Check for matches in ingredients to search for the recipe
      ingredients.forEach(ingredient => {
        if (transcript.includes(ingredient)) {
          // Query the db looking for recipes with the spoken ingredient
          API.searchRecipes(ingredient)
            .then(dbResponse => {
              // Clear the previous recipes, if any
              this.setState({recipes: []});
              let recipesCopy = this.state.recipes.slice();
              dbResponse.data.forEach(ingredient => recipesCopy.push(ingredient))
              
              this.setState({ recipes: recipesCopy })
              console.log(dbResponse.data)
            })
            .catch(err => console.log(err))
        }

        // Check for matches in commands to perform the action
        if (transcript.includes('scroll down')) {
         window.scrollBy(0, 100);
        }
        if (transcript.includes('scroll up' || 'scroll app')) {
         window.scrollBy(0, -100);
        }

        
      })
    }

    // Keep the Speech API open
    recognition.addEventListener('end', recognition.start);
    // Start speech API
    recognition.start();
  }
  
  // Function to handle manual search
  handleManualSearch = searchResult => this.setState({ recipes: searchResult });

  render() {
    
    return (

      <div className="container">
        <h1>Cheff W</h1>
        <SearchForm manualSearch={this.handleManualSearch} />
        <SearchResult recipesResult={this.state.recipes} />
      </div>

    );
  }
}

export default App;
