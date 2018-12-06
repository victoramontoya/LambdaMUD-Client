import axios from 'axios';
import { Cookies }  from 'react-cookie';

export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const SUCCESS_NOTE = 'SUCCESS_NOTE';
export const SUCCESS_NOTES = 'SUCCESS_NOTES';
export const UPDATING = "UPDATING";
export const SUCCESS_USER = "SUCCESS_USER";
export const AUTH_USER = 'auth_user',
    UNAUTH_USER = 'unauth_user',
    AUTH_ERROR = 'auth_error',
    FORGOT_PASSWORD_REQUEST = 'forgot_password_request',
    RESET_PASSWORD_REQUEST = 'reset_password_request',
    PROTECTED_TEST = 'protected_test';

export const errorHandler = (dispatch, error, type) => {
    let errorMessage = '';

    if (error.data.error) {
        errorMessage = error.data.error;
    } else if (error.data) {
        errorMessage = error.data;
    } else {
        errorMessage = error;
    }

    if (error.status === 401) {
        dispatch({
            type: type,
            payload: 'You are not authorized to do this. Please login and try again.'
        });
        logoutUser();
    } else {
        dispatch({
            type: type,
            payload: errorMessage
        });
    }
}

// https://lambda-mud-victor.herokuapp.com/

export const createUser = ({ username, password1, password2 }) => {
    return dispatch => {
        dispatch({ type: PENDING });
        console.log(username);
        axios
            .post(`https://lambda-mud-victor.herokuapp.com/api/registration/`, { username, password1, password2 })
            .then(response => {
                // Cookies.save('token', response.data.token, { path: '/api/registration' });
                dispatch({ type: SUCCESS_USER, users: response.data })
                window.location.href = '/api/adv';
            })
            .catch(() => {
                dispatch({ type: ERROR, error: 'ERROR CREATING USER' })
            })
    }
}

export const loginUser = ({ username, password }) => {
    return dispatch => {
        dispatch({ type: PENDING });
        axios
            .post(`https://lambda-mud-victor.herokuapp.com/api/login`, { username, password })
            .then(response => {
                // Cookies.save('token', response.data.token, { path: '/api/login' });
                dispatch({ type: AUTH_USER, user: response.data })
                window.location.href = '/api/adv/init';

            })
            .catch(() => {
                dispatch({ type: ERROR, error: 'ERROR LOGGIN IN!' })
            })
    }
}
export function logoutUser() {
    return function (dispatch) {
        dispatch({ type: UNAUTH_USER });
        // Cookies.remove('token', { path: '/api/logout' });

        window.location.href = '/api/login';
    }
}

// export function protectedTest() {
//     return function (dispatch) {
//         axios.get(`http://127.0.0.1:8000/api/login/protected`, {
//             headers: { 'Authorization': Cookies.load('token') }
//         })
//             .then(response => {
//                 dispatch({
//                     type: PROTECTED_TEST,
//                     payload: response.data.content
//                 });
//             })
//             .catch((error) => {
//                 errorHandler(dispatch, error.response, AUTH_ERROR)
//             });
//     }
// }
