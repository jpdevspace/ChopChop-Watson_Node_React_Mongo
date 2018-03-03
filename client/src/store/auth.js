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

export const auth = (email, password, name) => {
    return dispatch => {
        // Authenticate user
        dispatch(authStart());
        // Send user info to the backend for registration
        const newUser = {
            name: name, 
            password: password,
            email: email
        }
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