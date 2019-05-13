import dispositives from '../../services/DevicesService';

import { createTypes, completeTypes} from 'redux-recompose';

export const actions= createTypes(completeTypes([
    "GET_DISPOSITIVES",
    "POST_DISPOSITIVES",
    "GET_DISPOSITIVES_TYPES",
    "PUT_DISPOSITIVE",
    "DELETE_DISPOSITIVE",
    "POST_DISPOSITIVE_ROOM",
    "EXECUTE_DEVICE_ACTION"
]),'@@DISPOSITIVE');

const actionCreators = {
    executeDeviceAction: (deviceId, action, data) => async dispatch => {
        dispatch({ type: actions.EXECUTE_DEVICE_ACTION});
        const response = await dispositives.executeDeviceAction(deviceId, action, data);
        if(response.ok) {
            dispatch({ type: actions.EXECUTE_DEVICE_ACTION_SUCCESS });
        } else {
            dispatch({ type: actions.EXECUTE_DEVICE_ACTION_FAIL});
        }
    },
    getDispositivesTypes: () => async dispatch => {
        dispatch({ type: actions.GET_DISPOSITIVES_TYPES});
        const response = await dispositives.getDevicesTypes();
        if(response.ok) {
            dispatch({
                type:actions.GET_DISPOSITIVES_TYPES_SUCCESS,
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
                type: actions.GET_DISPOSITIVES_SUCCESS,
                payload: response.data.devices
            });
        } else {
            dispatch({ type: actions.POST_DISPOSITIVE_FAIL});
        }
    },
    postDispositive: (data, roomId) => async dispatch => {
        dispatch({ type: actions.POST_DISPOSITIVE });
        const response = await dispositives.postDevice(data);
        if (response.ok) {
            dispatch({type: actions.POST_DISPOSITIVE_SUCCESS});
            dispatch(actionCreators.getDispositives());
            if (roomId !== undefined) {
                const response2 = await dispositives.postDeviceRoom(response.data.device.id, roomId);
                if(response2.ok) {
                    dispatch({type: actions.POST_DISPOSITIVE_ROOM_SUCCESS})
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
            dispatch({ type: actions.PUT_DISPOSITIVE_SUCCESS });
            dispatch(actionCreators.getDispositives());
        } else {
            dispatch({ type: actions.PUT_DISPOSITIVE_FAIL})
        }
    },
    deleteDispositive: deviceId => async dispatch => {
        dispatch({ type: actions.DELETE_DISPOSITIVE});
        const response = await dispositives.deleteDevice(deviceId);
        if(response.ok) {
            dispatch({ type:actions.DELETE_DISPOSITIVE_SUCCESS});
            dispatch(actionCreators.getDispositives());
        } else {
            dispatch({ type: actions.DELETE_DISPOSITIVE_FAIL });
        }
    }
}

export default actionCreators;