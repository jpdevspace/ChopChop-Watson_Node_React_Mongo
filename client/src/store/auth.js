import API from '../utils/API';

import * as actionTypes from './actions';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSucess = authData => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = error => {
    return{
        types: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const authSignUp = (name, email, password) => {
    return dispatch => {
        // Authenticate user
        dispatch(authStart());
        // Send user info to the backend for registration
        const newUser = { name, email, password };
        console.log(newUser);
        API.userSignup(newUser)
            .then(response => {
                console.log(response)
                dispatch(authSucess(response.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err))
            })
    }
}

export const authSignIn = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const logUser = { email, password };
        API.userLogin(logUser)
            .then(response => {
                console.log(response)
                dispatch(authSucess(response.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err))
            })
    }
}
            