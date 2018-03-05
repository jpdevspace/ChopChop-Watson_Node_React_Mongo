import React from 'react';

// Components
import Recipe from './Recipe';

const RecipesList = props => {
    let recipe = props.recipes.map((value, index) => {
        return (
            <Recipe
                isAuthed={props.isAuthed}
                authedUser={props.authedUser}
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
        <section id="search-results">
            <div className="container">
                {props.recipes.length > 0
                    ?
                        <div>
                            <h2>Search Results</h2>
                            <ul>{recipe}</ul>
                        </div>
                    :   <h4>Search for one of the ingredients to begin</h4>
                }
            </div>

        </section>
    );
}

export default RecipesList;