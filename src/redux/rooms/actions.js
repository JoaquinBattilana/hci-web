import rooms from '../../services/RoomsService';

export const actions = {
    SELECT_ROOM: "@@ROOMS/SELECT_ROOM",
    GET_ROOMS: "@@ROOMS/GET_ROOMS",
    GET_ROOMS_SUCESS: "@@ROOMS/GET_ROOMS_SUCESS",
    GET_ROOMS_FAIL: "@@ROOMS/GET_ROOMS_FAIL",
    GET_ROOM_DEVICES: "@@ROOMS/GET_ROOM_DEVICES",
    GET_ROOM_DEVICES_SUCESS: "@@ROOMS/GET_ROOM_DEVICES_SUCESS",
    GET_ROOM_DEVICES_FAIL: "@@ROOMS/GET_ROOM_DEVICES_FAIL",
    POST_ROOMS: "@@ROOMS/POST_ROOMS",
    POST_ROOMS_SUCESS: "@@ROOMS/POST_ROOMS_SUCESS",
    POST_ROOMS_FAIL: "@@ROOMS/POST_ROOMS_FAIL"
};

const actionsCreator = {
    selectRoom: room => {
        return({
            type: actions.SELECT_ROOM,
            payload: room
        });
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
            dispatch({ type: actions.GET_ROOMS_FAIL });
    },
    getRoomDevices: roomId => async dispatch => {
        dispatch({
            type: actions.GET_ROOMS_DEVICES
        })
        const response = await rooms.getRoomDevices(roomId);
        if (response.ok) {
            dispatch({
                type: actions.GET_ROOMS_DEVICES_SUCESS
            });
        } else {
            dispatch({
                type: actions.GET_ROOMS_DEVICES_FAIL
            })
        }
    }
};

export default actionsCreator;