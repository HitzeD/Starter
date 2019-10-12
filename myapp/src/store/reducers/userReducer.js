import {
    FETCH_INFO_START,
    FETCH_INFO_SUCCESS,
    FETCH_INFO_FAILURE,
} from '../actions';

const INITIAL_STATE = {
    isLoggedIn: false,
    loading: false,
    status: null,
    error: null,

}

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_INFO_START:
            return {
                ...state,
                loading: true,

            }
        case FETCH_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                status: action.payload,
            }
        case FETCH_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
}