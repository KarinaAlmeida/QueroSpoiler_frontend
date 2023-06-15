import api from './api';

export async function homeAPI() {
    const response = await api.get('/home');
    return response.data;
  }
