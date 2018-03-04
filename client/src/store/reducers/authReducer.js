import * as actionTypes from '../actions/actions';

const initialState = {
    name: '',
    token: null,
    userId: null,
    error: null,
    loading: false
    
}

const authStart = (state = initialState, action) => {
    return {
        ...state,
        loading: true,
    }
}

const authSuccess = (state = initialState, action) => {
    return {
        ...state,
        token: action.userToken,
        userId: action.userId,
        name: action.userName,
        loading: false
    }
}

const authFail = (state, action) => {
    return {
        ...state,
        error: 'Somethind baaad happened'
    }
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: return state;
    }
}

export default reducer;