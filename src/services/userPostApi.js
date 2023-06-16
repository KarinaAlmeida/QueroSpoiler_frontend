import api from './api';

export async function userPostAPI(token) {
    const response = await api.get('/user',{
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return response.data;
  }
