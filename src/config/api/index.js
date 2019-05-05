import { create } from 'apisauce';

const api = create ({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000
});

export default api;