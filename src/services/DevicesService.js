import api from '../config/api';

export default {
    getDevices: () => api.get("/devices"),
    putDevices: data => api.put("/devices", data)
};