import api from './api';

export async function postAPI(post, token ) {
    const response = await api.post('/post', post, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return response.data;
  }
