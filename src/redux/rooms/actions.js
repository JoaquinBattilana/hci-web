import rooms from '../../services/RoomsService';

export const actions = {
    GET_ROOMS: "@@ROOMS/GET_ROOMS",
    GET_ROOMS_SUCESS: "@@ROOMS/GET_ROOMS_SUCESS",
    GET_ROOMS_FAIL: "@@ROOMS/GET_ROOMS_FAIL",
    POST_ROOMS: "@@ROOMS/POST_ROOMS",
    POST_ROOMS_SUCESS: "@@ROOMS/POST_ROOMS_SUCESS",
    POST_ROOMS_FAIL: "@@ROOMS/POST_ROOMS_FAIL"
};

const actionsCreator = {
    getRooms: () => async dispatch => {
        dispatch({ type: actions.GET_ROOMS});
        const response = await rooms.getRooms();
        if (response.ok) {
            dispatch({
                type: actions.GET_ROOMS_SUCESS,
                payload: response.data.rooms
            });
        } else
            dispatch({ type: actions.GET_ROOMS_FAIL });
    }
};

export default actionsCreator;