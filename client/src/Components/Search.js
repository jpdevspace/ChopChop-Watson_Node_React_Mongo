import React, { Component } from 'react';

// Components
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
    return (
        <div className="form-group">
            <input onChange={this.handleChange} id="searchRecipe" type="text" className="form-control" />
            <button onClick={this.handleSearch} type="submit" className="btn btn-info mt-3">Search</button>
        </div>
    );
  }
}

export default Search;