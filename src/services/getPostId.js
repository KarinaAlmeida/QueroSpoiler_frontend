import api from './api';

export async function getPostAPI(postId) {
    const response = await api.get(`/post/${postId}`);
    return response.data;
  }
