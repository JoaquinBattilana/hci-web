import { actions } from './actions';

const initialState = {
    roomSelected: null,
    isLoading: false,
    hasError: false,
    rooms: []
};

function reducer(state=initialState, action) {
    switch(action.type){
        case actions.GET_ROOMS:
            return({
                ...state,
                isLoading: true,
            });
        case actions.GET_ROOMS_SUCESS:
            return({
                ...state,
                isLoading: false,  
                hasError: false,
                rooms: action.payload
            });
        case actions.GET_ROOMS_FAIL:
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