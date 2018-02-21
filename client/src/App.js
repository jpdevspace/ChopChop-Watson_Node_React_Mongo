import React, { Component } from 'react';
import './App.css';

// Components
import Search from './Components/Search';
import SearchResult from './Components/SearchResults';

class App extends Component {


  render() {
    
    return (
      <div className="container">
        <h1>Cheff W</h1>
        <Search />
        <ul>
          <SearchResult />
        </ul>
      </div>
    );
  }
}

export default App;
