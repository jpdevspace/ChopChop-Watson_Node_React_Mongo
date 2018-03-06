import * as actionTypes from './actions';

// Axios for HTTP requests
import API from '../../utils/API';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (userName, userToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userName,
        userToken,
        userId
    }
}

export const authFail = error => {
    return{
        type: actionTypes.AUTH_FAIL,
        errorMsg: error.response.data,
        errorStatus: error.response.status
    }
}

export const authSignUp = (name, email, password) => {
    return dispatch => {
        // Authenticate user
        dispatch(authStart());
        // Send user info to the backend for registration
        const newUser = { name, email, password };
        API.userSignup(newUser)
            .then(response => {
                console.log(response)
                const userName = response.data.userInfo.name;
                const userToken = response.data.userInfo.token;
                const userId = response.data.userInfo.userId;
                // Save user auth info in the session storage to have that info available after browser refresh
                localStorage.setItem('userToken', userToken);
                localStorage.setItem('userId', userId);
                localStorage.setItem('userName', userName);
                dispatch(authSuccess(userName, userToken, userId));
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
                const userName = response.data.userInfo.name;
                const userToken = response.data.userInfo.token;
                const userId = response.data.userInfo.userId;
                // Save Token info in the session storage to prevent logout on page refresh
                localStorage.setItem('userToken', userToken);
                localStorage.setItem('userId', userId);
                localStorage.setItem('userName', userName);
                dispatch(authSuccess(userName, userToken, userId));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err))
            })
    }
}

export const authLogout = () => {
    // Remove the info from localStorage
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authCheckState = () => {
    return dispatch => {
        // Check if there's a token in the LocalStorage
        const userToken = localStorage.getItem('token');
        if (!userToken) {
            // If there's no token in LocalStorage run the authLogout action
            dispatch(authLogout());
        } else {
            // Get the userId from LocalStorage
            const userId = localStorage.getItem('userId');
            const userName = localStorage.getItem('userName');
            dispatch(authSuccess(userName, userToken, userId));
        }
    }
}
            