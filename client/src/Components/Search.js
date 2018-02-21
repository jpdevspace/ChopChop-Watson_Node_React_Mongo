import React, { Component } from 'react';
// Components

// Utils
import API from '../utils/API';

class Search extends Component {

  speech() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', event => console.log(event))
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
              placeholder="Speak your ingredient"
            />
            <button onClick={this.speech} type="submit" className="btn btn-primary mt-3">Listen</button>
            <p>I heard</p>

        </div>
    );
  }
}

export default Search;