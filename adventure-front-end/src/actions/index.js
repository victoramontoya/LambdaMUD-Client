import axios from 'axios';
export const PENDING = 'PENDING';
export const ERROR = 'ERROR';
export const SUCCESS_ADVENTURE = 'SUCCESS_ADVENTURE';
export const SUCCESS_CHAT = 'SUCCESS_CHAT';
export const UPDATING = "UPDATING";
export const SET_TOKEN = "SET_TOKEN";
export const LOGIN_PENDING = "LOGIN_PENDING"

export const createAdventure = () => {
    return (dispatch) => {
        dispatch({ type: PENDING });
        axios
            .get('https://lambda-mud-victor.herokuapp.com/api/adv/init')
            .then(response => {
                dispatch({ type: SUCCESS_ADVENTURE, adventure: response.data })
                window.location.href = '/api/adv/move'
            })
            .catch(err => {
                dispatch({ type: ERROR, error: 'ERROR FETCHING ADVENTURE' })
            })
    }
}

//pending or updating??
export const moveAdventure = (move) => {
    return dispatch => {
        dispatch({ type: PENDING });
        console.log(move);
        axios
            .post('https://lambda-mud-victor.herokuapp.com/api/adv/move', move)
            .then(response => {
                dispatch({ type: SUCCESS_ADVENTURE, adventure: response.data })
            })
            .catch(() => {
                dispatch({ type: ERROR, error: 'ERROR CREATING MOVE' })
            })
    }
}

export const createChat = (message) => {
    return dispatch => {
        dispatch({ type: PENDING });
        console.log(message);
        axios
            .post('https://lambda-mud-victor.herokuapp.com/api/adv/say', message)
            .then(response => {
                dispatch({ type: SUCCESS_CHAT, chat: response.data })
            })
            .catch(() => {
                dispatch({ type: ERROR, error: 'ERROR CREATING CHAT' })
            })
    }
}

export const setToken = (data) => {
    return {
        type: SET_TOKEN,
        data
    }
}

// export const setToken = (data) => {
//     return dispatch => {
//         dispatch({type: SET_TOKEN});
//         data
//     }
// }