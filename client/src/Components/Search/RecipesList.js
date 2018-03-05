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
        <ul>{recipe}</ul>
    );
}

export default RecipesList;