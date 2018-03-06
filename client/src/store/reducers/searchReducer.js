import * as actionTypes from '../actions/actions';

const initialState = {
    recipes: [],
    recipeIndex: null,
    save: false
}

const searchRecipe = (state = initialState, action) => {
    return {
        ...state,
        recipes: action.recipes
    }
}

const selectRecipe = (state = initialState, action) => {
    return {
        ...state,
        recipeIndex: action.recipeIndex
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_RECIPE: return searchRecipe(state, action);
        case actionTypes.SELECT_RECIPE: return selectRecipe(state, action);
        default: return state;
    }
};

export default reducer;
