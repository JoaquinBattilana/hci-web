import dispositives from '../../services/DevicesService';

export const actions = {
    GET_DISPOSITIVES: "@@DISPOSITIVES/GET_DISPOSITIVES",
    GET_DISPOSITIVES_SUCESS: "@DISPOSITIVES/GET_DISPOSITIVES_SUCESS",
    POST_DISPOSITIVE: "@@DISPOSITIVES/POST_DISPOSITIVES",
    POST_DISPOSITIVE_SUCESS: "@@DISPOSITIVES/POST_DISPOSITIVE_SUCESS",
    POST_DISPOSITIVE_FAIL: "DISPOSITIVE/POST_DISPOSITIVE_FAIL",
    GET_DISPOSITIVES_TYPES: "@@DISPOSITIVES/GET_DISPOSITIVES_TYPES",
    GET_DISPOSITIVES_TYPES_SUCESS: "@@DISPOSITIVES/GET_DISPOSITIVES_TYPES_SUCESS",
    GET_DISPOSITIVE_TYPES_FAIL: "DISPOSITIVES/GET_DISPOSITIVES_TYPE_FAIL",
    PUT_DISPOSITIVE: "@@DISPOSITIVES/PUT_DISPOSITIVE",
    PUT_DISPOSITIVE_SUCESS: "@@DISPOSITIVES/PUT_DISPOSITIVE_SUCESS",
    PUT_DISPOSITIVE_FAIL: "@@DISPOSITIVES/PUT_DISPOSITIVE_FAIL",
    DELETE_DISPOSITIVE: "@@DISPOSITIVE/DELETE_DISPOSITIVE",
    DELETE_DISPOSITIVE_SUCESS: "@@DISPOSITIVE/DELETE_DISPOSITIVE_SUCESS",
    DELETE_DISPOSITIVE_FAIL: "@@DISPOSITIVE/DELETE_DISPOSITIVE_FAIL",
    POST_DISPOSITIVE_ROOM: "@@DISPOSITIVE/POST_DISPOSITIVE_ROOM",
    POST_DISPOSITIVE_ROOM_SUCESS: "@@DISPOSITIVE/POST_DISPOSITIVE_ROOM_SUCESS",
    POST_DISPOSITIVE_ROOM_FAIL: "@@DISPOSITIVE/POST_DISPOSITIVE_ROOM_FAIL",
    EXECUTE_DEVICE_ACTION: "@@DISPOSITIVES/EXECUTE_DEVICE_ACTION",
    EXECUTE_DEVICE_ACTION_SUCESS: "@@DISPOSITIVES/EXECUTE_DEVICE_ACTION_SUCESS",
    EXECUTE_DEVICE_ACTION_FAIL: "@@DISPOSITIVES/EXECUTE_DEVICE_ACTION_FAIL"
};

const actionCreators = {
    executeDeviceAction: (deviceId, action, data) => async dispatch => {
        dispatch({ type: actions.EXECUTE_DEVICE_ACTION});
        const response = await dispositives.executeDeviceAction(deviceId, action, data);
        if(response.ok) {
            dispatch({ type: actions.EXECUTE_DEVICE_ACTION_SUCESS });
        } else {
            dispatch({ type: actions.EXECUTE_DEVICE_ACTION_FAIL});
        }
    },
    getDispositivesTypes: () => async dispatch => {
        dispatch({ type: actions.GET_DISPOSITIVES_TYPES});
        const response = await dispositives.getDevicesTypes();
        if(response.ok) {
            dispatch({
                type:actions.GET_DISPOSITIVES_TYPES_SUCESS,
                payload: response.data.devices
            });
        } else {
            dispatch({ type:actions.GET_DISPOSITIVE_TYPES_FAIL });
        }
    },
    getDispositives: () => async dispatch => {
        dispatch({ type: actions.GET_DISPOSITIVES });
        const response = await dispositives.getDevices();
        if (response.ok) {
            dispatch({
                type: actions.GET_DISPOSITIVES_SUCESS,
                payload: response.data.devices
            });
        } else {
            dispatch({ type: actions.POST_DISPOSITIVE_FAIL});
        }
    },
    postDispositive: (data, roomId) => async dispatch => {
        dispatch({ type: actions.POST_DISPOSITIVE });
        const response = await dispositives.postDevices(data);
        if (response.ok) {
            dispatch({type: actions.POST_DISPOSITIVE_SUCESS});
            dispatch(actionCreators.getDispositives());
            if (roomId !== undefined) {
                const response2 = await dispositives.postDeviceRoom(response.data.device.id, roomId);
                if(response2.ok) {
                    dispatch({type: actions.POST_DISPOSITIVE_ROOM_SUCESS})
                }
                else {
                    dispatch({type: actions.POST_DISPOSITIVE_ROOM_FAIL})
                }
            }
        }
        else {
            dispatch({ type: actions.POST_DISPOSITIVE_FAIL });
        }
    },
    putDispositive: (deviceId, data) => async dispatch => {
        dispatch({ type: actions.PUT_DISPOSITIVE});
        const response = await dispositives.putDevice(deviceId, data);
        if (response.ok) {
            dispatch({ type: actions.PUT_DISPOSITIVE_SUCESS });
        } else {
            dispatch({ type: actions.PUT_DISPOSITIVE_FAIL})
        }
    },
    deleteDispositive: deviceId => async dispatch => {
        dispatch({ type: actions.DELETE_DISPOSITIVE});
        const response = await dispositives.deleteDevice(deviceId);
        if(response.ok) {
            dispatch({ type:actions.DELETE_DISPOSITIVE_SUCESS});
            dispatch(actionCreators.getDispositives());
        } else {
            dispatch({ type: actions.DELETE_DISPOSITIVE_FAIL });
        }
    }
}

export default actionCreators;