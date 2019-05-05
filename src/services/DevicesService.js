import api from '../config/api';

export default {
    getDevices: () => api.get("/devices"),
    postDevices: data => api.post("/devices", data)
};