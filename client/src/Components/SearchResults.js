import React from 'react';

// Components
import ResultItem from './ResultItem';

const SearchResult = props => {
    let recipesResultItem = props.recipes.map((value, index) => {
        return (
            <ResultItem
                key={value._id}
                recipe_id={value._id}
                title={value.title}
                image={value.src}
                ingredients={value.ingredients}
                instructions={value.instructions}
            />
        );
    })

    return (
        <ul>{recipesResultItem}</ul>
    );
}

export default SearchResult;