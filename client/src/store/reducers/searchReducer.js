import * as actionTypes from '../actions/actions';

const initialState = {
    recipes: []
}

const searchRecipe = (state = initialState, action) => {
    return {
        ...state,
        recipes: action.recipes
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_RECIPE: return searchRecipe(state, action);
        default: return state;
    }
};

export default reducer;
