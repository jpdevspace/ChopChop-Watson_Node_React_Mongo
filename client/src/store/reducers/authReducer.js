import * as actionTypes from '../actions/actions';

const initialState = {
    name: '',
    token: null,
    userId: null,
    errorMsg: null,
    errorStatus: null,
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
        errorMsg: action.errorMsg,
        errorStatus: action.errorStatus
    }
}

const authLogout = (state, action) => {
    return {
        ...state,
        name: '',
        token: null,
        userId: null
    }
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
}

export default reducer;