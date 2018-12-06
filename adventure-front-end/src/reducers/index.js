import { combineReducers } from 'redux';
import { PENDING, ERROR, SUCCESS_CHAT, SUCCESS_ADVENTURE, UPDATING, SET_TOKEN } from '../actions';

const initialState = {
    chat: [],
    adventure: [],
    creatingAdventure: false,
    fetchingAdventure: false,
    creatingChat: false,
    updatingChat: false,
    error: null,
    tokenInitialState : null,
    // chat: {
    //     modal: false,

    // }
}

const token = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return action.data;
        default:
            return state;
    }
}

const adventureReducer = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return Object.assign({}, state, { fetchingAdventure: true });
        case SUCCESS_ADVENTURE:
            return Object.assign({}, state, {
                adventure: action.adventure,
                fetchingAdventure: false
            });
        case ERROR:
            return Object.assign({}, state, {
                error: action.error,
                fetchingAdventure: false
            });
        default:
            return state;
    }

}


const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_CHAT:
            return Object.assign({}, state, {
                chat: action.chat,
                updatingChat: false
            });
        case ERROR:
            return Object.assign({}, state, {
                error: action.error,
                fetchingAdventure: false
            });
        case UPDATING:
            return Object.assign({}, state, {
                updatingChat: true,
                chat: action.chat
            });
        default:
            return state;
    }

}

const appReducer = combineReducers({
    token,
    adventureReducer,
    chatReducer

})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}


export default rootReducer;