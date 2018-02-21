import React, { Component } from 'react';
import './App.css';

// Components
import Search from './Components/Search';
import SearchResult from './Components/SearchResults';

// Utils
import API from './utils/API';

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
      const ingredients = ['chicken recipes', 'meat recipes', 'pasta recipes', 'fish recipes', 'rice recipes'];

      // Check for matches to run the specific query
      ingredients.forEach(value => {
        if (transcript.includes(value)) {
          API.searchRecipes(value)
            .then(edamamRes => {
              let recipesCopy = this.state.recipes.slice();
              edamamRes.data.forEach(value => recipesCopy.push(value))
              
              this.setState({ recipes: recipesCopy })
              console.log(edamamRes.data)
            })
            .catch(err => console.log(err))
        }
      })
    }

    // Keep the Speech API open
    // recognition.onspeechend = () => recognition.start();
    recognition.start();
  }
  
  // Function to handle manual search
  handleManualSearch = searchResult => this.setState({ recipes: searchResult });

  render() {
    
    return (
      <div className="container">
        <h1>Cheff W</h1>
        <Search manualSearch={this.handleManualSearch} />
        <ul>
          <SearchResult />
        </ul>
      </div>
    );
  }
}

export default App;
