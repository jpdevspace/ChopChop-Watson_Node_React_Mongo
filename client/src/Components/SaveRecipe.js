import React from 'react';
// Utils
import API from '../utils/API';

const SaveRecipe = props => {
    const  handleSaveRecipe = (userId, recipeId) => {

        API.saveRecipe(userId, recipeId)
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
    }
    return(
        <button 
            className="btn btn-info"
            onClick={() => handleSaveRecipe(props.user._id, props.recipe_id)}>Save Recipe 
            <i className="far fa-bookmark"></i>
        </button> 
    );
}

export default SaveRecipe;