import React, { Component } from 'react';

// Components
import ResultItem from './ResultItem';

class SearchResult extends Component {
  render() {
    let recipesResultItem = this.props.recipesResult.map((value, index) => {
      return <ResultItem key={index} label={value.recipe.label} image={value.recipe.image} ingredients={value.recipe.ingredientLines} url={value.recipe.url} />
    })

    return (
        <li>{recipesResultItem}</li>
    );
  }
}

export default SearchResult;