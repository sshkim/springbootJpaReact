import {FETCH_POSTS, FETCH_POST} from '../actions/index';


const INITIAL_STATE = {all: [], post: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POST:
            return Object.assign({}, state, {state, post: action.payload.data});

        case FETCH_POSTS:
            return Object.assign({}, state, {state, all: action.payload.data._embedded.boards});

        default:
            return state;
    }
}
