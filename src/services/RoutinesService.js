import api from '../config/api';

export default {
    getRoutines: () => api.get('/routines'),
    postRoutine: routineData => api.post('/routines', routineData),
    getRoutine: routineId => api.get('/routines/' + routineId),
    executeRoutine: routineId => api.put('/routines/'+routineId+'/execute'),
    deleteRoutine: routineId => api.delete('/routines/' + routineId)
};