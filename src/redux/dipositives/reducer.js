import { actions } from './actions';

const initialState = {
    dispositivesType: [],
    dispositives: [],
    currentDispositive: null,
    isLoading: false,
    hasError: false
};

function reducer(state=initialState, action) {
    switch(action.type) {
        case actions.SET_CURRENT_DISPOSITIVE:
            return({
                ...state,
                currentDispositive: action.payload
            });
        case actions.GET_DISPOSITIVES_TYPES:
            return({
                ...state,
                isLoading: true
            });
        case actions.GET_DISPOSITIVES_TYPES_SUCESS:
            return({
                ...state,
                isLoading: false,
                hasError: false,
                dispositivesType: action.payload
            });
        case actions.GET_DISPOSITIVE_TYPES_FAIL:
            return({
                ...state,
                isLoading: false,
                hasError: true
            });
        case actions.GET_DISPOSITIVES:
            return({
                ...state,
                isLoading: true
            });
        case actions.GET_DISPOSITIVES_SUCESS:
            return({
                ...state,
                isLoading: false,
                hasError: false,
                dispositives: action.payload
            });
        case actions.GET_DISPOSITIVE_FAIL:
            return({
                ...state,
                isLoading: false,
                hasError: false,
            });
        case actions.PUT_DISPOSITIVE:
            return({
                ...state,
                isLoading: true,
            });
        case actions.PUT_DISPOSITIVE_SUCESS:
            return({
                ...state,
                isLoading: false,
                hasError: false
            });
        case actions.PUT_DISPOSITIVE_FAIL:
            return({
                ...state,
                isLoading: false,
                hasError: true
            });
        case actions.DELETE_DISPOSITIVE:
            return({
                ...state,
                isLoading: true
            });
        case actions.DELETE_DISPOSITIVE_SUCESS:
            return({
                ...state,
                isLoading: false,
                hasError: false
            });
        case actions.DELETE_DISPOSITIVE_FAIL:
            return({
                ...state,
                isLoading: false,
                hasError: true
            });
        default:
            return state;            
    }
}

export default reducer;