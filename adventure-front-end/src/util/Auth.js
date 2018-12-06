// import axios from 'axios';
// import _ from 'lodash';
// import store from '../store';
// import { setToken } from '../actions'
// import { URL, LOGIN } from '../config';
// import { LOGIN_PENDING } from '../actions';




// //invalid message
// export function InvalidCredentialsException(message) {
//     this.message = message;
//     this.name = 'InvalidCredentialsException';
// }

// export const login = (username, password) => {
//     return (dispatch) => {
//         dispatch({ type: LOGIN_PENDING});
//         axios
//         .post(URL + LOGIN, {
//             username,
//             password
//         })
//         .then(response => {
//             store.dispatch(setToken(response.data.token));
//         })
//         .catch( err => {
//             // raise different exception if due to invalid credentials
//             if (_.get(err, 'response.status') === 400) {
//                 throw new InvalidCredentialsException(err);
//             }
//             throw err;
//         });
//     }
// };

// export const loggedIn= () => {
//     return store.getState().token !== null;
// }