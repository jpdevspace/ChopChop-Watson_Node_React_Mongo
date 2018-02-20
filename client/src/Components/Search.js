import React, { Component } from 'react';
// Components
import SpeechRecognition from 'react-speech-recognition';

// Utils
import API from '../utils/API';

class Search extends Component {
  state = { query: "" }

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
    const { transcript, resetTranscript, startListening, stopListening, browserSupportsSpeechRecognition } = this.props;
    
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
        <div className="form-group">
            <input onChange={this.handleChange} id="searchRecipe" type="text" className="form-control" />
            <button onClick={this.handleSearch} type="submit" className="btn btn-info mt-3">Search</button>
            <button onClick={startListening} type="submit" className="btn btn-warning mt-3">Start Listening</button>
            <button onClick={resetTranscript} type="submit" className="btn btn-warning mt-3">Reset</button>
            <button onClick={stopListening} type="submit" className="btn btn-warning mt-3">Stop</button>
            <p><span>{transcript}</span></p>
        </div>
    );
  }
}

export default SpeechRecognition(Search);