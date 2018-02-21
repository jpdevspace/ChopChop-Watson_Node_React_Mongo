import React, { Component } from 'react';
// Components

// Utils
import API from '../utils/API';

class Search extends Component {

  componentDidMount() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;

    recognition.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript);
      // Check for keywords
      const ingredients = ['chicken recipes', 'meat recipes', 'pasta recipes', 'fish recipes', 'rice recipes'];
      // const commands = []

      ingredients.forEach(value => {
        if (transcript.includes(value)) {
          console.log(value)
          API.searchRecipes(value)
            .then(edamamRes => console.log(edamamRes.data))
            .catch(err => console.log(err))
        }
      })
    }

    // Keep the Speech API open
    // recognition.onspeechend = () => recognition.start();
    recognition.start();
}

  handleChange = event => {
    this.setState({ query: event.target.value });
  }

  handleSearch = event => {
    event.preventDefault();
    API.searchRecipes(this.state.query)
      .then(edamamRes => console.log(edamamRes.data))
      .catch(err => console.log(err))
  }

  render() {

    return (

        <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Ex. Say 'Chicken recipes'"
            />
            <button onClick={this.speech} type="submit" className="btn btn-primary mt-3">Listen</button>
            <p>I heard</p>

        </div>
    );
  }
}

export default Search;