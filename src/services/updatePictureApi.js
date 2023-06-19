import api from './api';

export async function UpdateAPI(update, token) {
    const response = await api.put('/user', update, {
      headers: {
          Authorization: `Bearer ${token}`
      },
  });
    return response.data;
  }
