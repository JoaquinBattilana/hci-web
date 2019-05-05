import dispositives from '../../services/DevicesService';

export const actions = {
    GET_DISPOSITIVES: "@@DISPOSITIVES/GET_DISPOSITIVES",
    GET_DISPOSITIVES_SUCESS: "@DISPOSITIVES/GET_DISPOSITIVES_SUCESS",
    POST_DISPOSITIVE: "@@DISPOSITIVES/POST_DISPOSITIVES",
    POST_DISPOSITIVE_SUCESS: "@@DISPOSITIVES/POST_DISPOSITIVE_SUCESS",
    POST_DISPOSITIVE_FAIL: "DISPOSITIVE/POST_DISPOSITIVE_FAIL",
    GET_DISPOSITIVES_TYPES: "@@DISPOSITIVES/GET_DISPOSITIVES_TYPES",
    GET_DISPOSITIVES_TYPES_SUCESS: "@@DISPOSITIVES/GET_DISPOSITIVES_TYPES_SUCESS",
    GET_DISPOSITIVE_TYPES_FAIL: "DISPOSITIVES/GET_DISPOSITIVES_TYPE_FAIL"
};

const actionCreators = {
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
    postDispositive: data => async dispatch => {
        dispatch({ type: actions.POST_DISPOSITIVE });
        const response = await dispositives.postDevices(data);
        if (response.ok) {
            dispatch({
                type: actions.POST_DISPOSITIVE_SUCESS,
                payload: response.data
            });
        }
        else {
            dispatch({ type: actions.POST_DISPOSITIVE_FAIL });
        }
    }
}

export default actionCreators;