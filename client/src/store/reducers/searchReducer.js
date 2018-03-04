import * as actionTypes from '../actions/actions';

const initialState = {
    recipes: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_RECIPE:
            return {
                ...state,
                recipes: action.payload
            }
        default: 
            return state;
    }
};

export default reducer;
