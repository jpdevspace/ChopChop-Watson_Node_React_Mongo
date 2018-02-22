import React, { Component } from 'react';
// Components

// Utils
import API from '../utils/API';

class SearchForm extends Component {
  state = { query: '' }

  handleSearch = event => {
    event.preventDefault();
    API.searchRecipes(this.state.query)
      .then(edamamRes => {
        // return the result to the parent component
        this.props.manualSearch(edamamRes.data)
      })
      .catch(err => console.log(err))
  }

  render() {

    return (

      <div className="form-group">
        <input 
          onChange={event => this.setState({ query: event.target.value })}
          type="text" 
          className="form-control" 
          placeholder="Ex. Say 'Chicken recipes'"
        />
        <button 
          onClick={this.handleSearch}
          type="submit" 
          className="btn btn-primary mt-3">
          Listen
        </button>
      </div>
    );
  }
}

export default SearchForm;