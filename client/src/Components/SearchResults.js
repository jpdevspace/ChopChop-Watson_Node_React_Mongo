import React, { Component } from 'react';

// Components
import ResultItem from './ResultItem';

class SearchResult extends Component {
  render() {
    let recipesResultItem = this.props.recipesResult.map((value, index) => {
      return  (
                <ResultItem 
                  key={value._id}
                  recipe_id={value._id} 
                  title={value.title} 
                  image={value.src} 
                  ingredients={value.ingredients} 
                  instructions={value.instructions} 
                  user={this.props.user} />
              );
    })

    return (
        <ul>{recipesResultItem}</ul>
    );
  }
}

export default SearchResult;