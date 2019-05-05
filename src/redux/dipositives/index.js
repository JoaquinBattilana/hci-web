import { actions } from './actions';

const initialState = {
    dispositives: [],
    isLoading: false,
    hasError: false
};

function reducer(state=initialState, action) {
    switch(action.type) {
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