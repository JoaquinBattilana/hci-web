import api from '../config/api';

export default {
    getDevicesTypes: () => api.get("/devicetypes"),
    getDevices: () => api.get("/devices"),
    postDevices: data => api.post("/devices", data)
};
