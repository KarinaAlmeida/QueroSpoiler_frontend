import api from './api';

export async function postFavesAPI(token, postId) {
  const response = await api.post('/post/favorite', { postId }, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return response.data;
}