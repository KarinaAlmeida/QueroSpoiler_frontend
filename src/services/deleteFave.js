import api from './api';

export async function deleteFavesAPI(token, postId) {
  const response = await api.delete('/post/favorite', {
    data: { postId },
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return response.data;
}