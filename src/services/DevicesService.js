import api from '../config/api';

export default {
    getDevicesTypes: () => api.get("/devicetypes"),
    getDeviceType: (deviceId) => api.get("/devicetypes/"+deviceId),
    getDevices: () => api.get("/devices"),
    postDevice: data => api.post("/devices", data),
    postDeviceRoom: (deviceId, roomId) => api.post("/devices/"+deviceId+"/rooms/"+roomId),
    putDevice: (deviceId, newData) => api.put("/devices/"+deviceId, newData),
    deleteDevice: deviceId => api.delete("/devices/"+deviceId),
    executeDeviceAction: (deviceId, actionName, data) => api.put("/devices/"+deviceId+'/'+actionName, data)
};
