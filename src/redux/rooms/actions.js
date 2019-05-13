import rooms from '../../services/RoomsService';
import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(completeTypes([
    "SELECT_ROOM",
    "GET_ROOMS",
    "GET_ROOM_DEVICES",
    "POST_ROOMS",
    "POST_ROOM"
]),"@@ROOMS");

const actionsCreator = {
    selectRoom: room => async dispatch => {
        dispatch({
            type: actions.SELECT_ROOM,
            payload: room
        });
        const response = await rooms.getRoomDevices(room.id);
        if (response.ok) {
            dispatch({
                type: actions.GET_ROOM_DEVICES_SUCCESS,
                payload: response.data.devices
            });
        } else {
            dispatch({
                type: actions.GET_ROOM_DEVICES_FAIL
            })
        }
    },
    getRooms: () => async dispatch => {
        dispatch({ type: actions.GET_ROOMS});
        const response = await rooms.getRooms();
        if (response.ok) {
            dispatch({
                type: actions.GET_ROOMS_SUCCESS,
                payload: response.data.rooms
            });
        } else
            dispatch({ type: actions.GET_ROOM_FAIL });
    },
    postRoom: data => async dispatch => {
        dispatch({ type: actions.POST_ROOM });
        const response = await rooms.postRoom(data);
        if(response.ok) {
            dispatch({ type: actions.POST_ROOM_SUCCESS});
        } else {
            dispatch({ type: actions.POST_ROOM_FAIL });
        }
    }
};

export default actionsCreator;