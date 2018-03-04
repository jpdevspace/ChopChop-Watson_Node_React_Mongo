import * as actionTypes from './actions';

// Axios for HTTP requests
import API from '../../utils/API';

export const searchSuccess = recipes => {
    return {
        type: actionTypes.SEARCH_RECIPE,
        recipes
    }
}

export const searchRecipe = ingredient => {
    return dispatch => {
        API.searchRecipes(ingredient)
            .then(dbResponse => {
                const recipes = dbResponse.data;
                dispatch(searchSuccess(recipes));
            })
            .catch(err => console.log(err))
    }
}