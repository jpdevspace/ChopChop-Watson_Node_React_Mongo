import API from '../../utils/API';

import * as actionTypes from './actions';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSucess = (userName, userToken, userId, userRecipes) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userName,
        userToken,
        userId
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
                const userName = response.data.userInfo.name;
                const userToken = response.data.userInfo.token;
                const userId = response.data.userInfo.userId;

                dispatch(authSucess(userName, userToken, userId));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err))
            })
    }
}
            