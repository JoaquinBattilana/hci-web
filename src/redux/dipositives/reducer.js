import { actions } from './actions';

const initialState = {
    dispositivesType: [],
    dispositives: [],
    isLoading: false,
    hasError: false
};

function reducer(state=initialState, action) {
    switch(action.type) {
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
        default:
            return state;            
    }
}

export default reducer;