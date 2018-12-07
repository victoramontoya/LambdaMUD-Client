import { combineReducers } from 'redux';
import { PENDING, ERROR, SUCCESS_CHAT, SUCCESS_ADVENTURE, UPDATING, SET_TOKEN } from '../actions';

const adventureState = {
    adventure: [],
    creatingAdventure: false,
    fetchingAdventure: false,
    room: "",
    uuid: null,
    name: "",
    description: "",
    players: [],
}

const chatState = {
    creatingChat: false,
    updatingChat: false,
    error: null,
    errorMessage: false,
    message: "",
    messages: [],

}

const tokenState = {
    tokenInitialState: null,
    loggedIn : true

}

const token = (state = tokenState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return action.data;
        default:
            return state;
    }
}

const adventureReducer = (state = adventureState, action) => {
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


const chatReducer = (state = chatState, action) => {
    switch (action.type) {
        case SUCCESS_CHAT:
            return Object.assign({}, state, {
                messages: action.messages,
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
                messages: action.messages
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