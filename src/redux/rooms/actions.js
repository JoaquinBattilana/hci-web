import rooms from '../../services/RoomsService';

export const actions = {
    SELECT_ROOM: "@@ROOMS/SELECT_ROOM",
    GET_ROOMS: "@@ROOMS/GET_ROOMS",
    GET_ROOMS_SUCESS: "@@ROOMS/GET_ROOMS_SUCESS",
    GET_ROOMS_FAIL: "@@ROOMS/GET_ROOMS_FAIL",
    GET_ROOM_DEVICES_SUCESS: "@@ROOMS/GET_ROOM_DEVICES_SUCESS",
    GET_ROOM_DEVICES_FAIL: "@@ROOMS/GET_ROOM_DEVICES_FAIL",
    POST_ROOMS: "@@ROOMS/POST_ROOMS",
    POST_ROOMS_SUCESS: "@@ROOMS/POST_ROOMS_SUCESS",
    POST_ROOMS_FAIL: "@@ROOMS/POST_ROOMS_FAIL",
    POST_ROOM: "@@ROOMS/POST_ROOM",
    POST_ROOM_SUCESS: "@@ROOMS/POST_ROOM_SUCESS",
    POST_ROOM_FAIL: "@@ROOMS/POST_ROOM_FAIL"
};

const actionsCreator = {
    selectRoom: room => async dispatch => {
        dispatch({
            type: actions.SELECT_ROOM,
            payload: room
        });
        const response = await rooms.getRoomDevices(room.id);
        if (response.ok) {
            dispatch({
                type: actions.GET_ROOM_DEVICES_SUCESS,
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
                type: actions.GET_ROOMS_SUCESS,
                payload: response.data.rooms
            });
        } else
            dispatch({ type: actions.GET_ROOM_FAIL });
    },
    postRoom: data => async dispatch => {
        dispatch({ type: actions.POST_ROOM });
        const response = await rooms.postRoom(data);
        if(response.ok) {
            dispatch({ type: actions.POST_ROOM_SUCESS});
        } else {
            dispatch({ type: actions.POST_ROOM_FAIL });
        }
    }
};

export default actionsCreator;