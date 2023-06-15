import api from './api';

export async function searchAPI(params) {
    const response = await api.get('/results', {
        params: params,
  });
    return response.data;
  }
