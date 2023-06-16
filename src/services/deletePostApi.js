import api from './api';

export async function deletePostAPI(token, postId ) {
    const response = await api.delete('/user', postId, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return response.data;
  }
