import { actions } from './actions';

const initialState = {
    roomSelected: null,
    roomSelectedDispositives: [],
    isLoading: false,
    hasError: false,
    rooms: []
};

function reducer(state=initialState, action) {
    switch(action.type){
        case actions.SELECT_ROOM:
            return({
                ...state,
                roomSelected: action.payload
            });
        case actions.GET_ROOMS:
            return({
                ...state,
                isLoading: true,
            });
        case actions.GET_ROOMS_SUCCESS:
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
        case actions.GET_ROOM_DEVICES_SUCCESS:
            return({
                ...state,
                isLoading: false,
                hasError: false,
                roomSelectedDispositives: action.payload
            })
        case actions.GET_ROOM_DEVICES_FAIL:
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