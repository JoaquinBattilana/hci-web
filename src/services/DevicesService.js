import api from '../config/api';

export default {
    getDevicesTypes: () => api.get("/devicetypes"),
    getDevices: () => api.get("/devices"),
    postDevices: data => api.post("/devices", data),
    postDeviceRoom: (deviceId, roomId) => api.post("/devices/"+deviceId+"/rooms/"+roomId),
    putDevice: (deviceId, newData) => api.put("/devices/"+deviceId, newData),
    deleteDevice: deviceId => api.delete("/devices/"+deviceId),
    executeDeviceaction: (deviceId, actionName, data) => api.put("/devices/"+deviceId+'/'+actionName, data)
};
