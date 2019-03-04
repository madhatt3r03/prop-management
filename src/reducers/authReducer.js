import {
    AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
    authenticated: false,
    user: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
            console.log(action.payload);
            return {
                ...state,
                user: action.payload.user
            }
        default: return state;
    }
}