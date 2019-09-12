import { FETCH_ROUTES_START, FETCH_ROUTES_FAILURE, FETCH_ROUTES_SUCCESS} from "../actions/index";

const initialState = {
    routes: [],
    error: "", 
    isFetching: false
}

export const climbReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ROUTES_START:
            return {
                ...state, 
                isFetching: true
            }
        case FETCH_ROUTES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: "action.payload"
            }
        case FETCH_ROUTES_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                routes: action.payload
            }
        default: 
            return state;
    }
}