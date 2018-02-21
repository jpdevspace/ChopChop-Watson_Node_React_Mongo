import React, { Component } from 'react';

// Components
import ResultItem from './ResultItem';

class SearchResult extends Component {
  render() {
    let recipesResultItem = this.props.recipesResult.map((value, index) => {
      return <ResultItem key={value._id} title={value.title} image={value.src} ingredients={value.ingredients} instructions={value.instructions} />
    })

    return (
        <ul>{recipesResultItem}</ul>
    );
  }
}

export default SearchResult;