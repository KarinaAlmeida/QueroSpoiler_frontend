import api from './api';

export async function userFavesAPI(token) {
    const response = await api.get('/user/favorite',{
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return response.data;
  }
 