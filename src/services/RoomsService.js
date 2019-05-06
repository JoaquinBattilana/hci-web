import api from '../config/api';

export default {
    getRooms: () => api.get('/rooms'),
    getRoomDevices: roomId => api.get('/rooms/'+roomId+'/devices')
};