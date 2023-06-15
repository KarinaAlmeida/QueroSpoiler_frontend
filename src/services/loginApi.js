import api from './api';

export async function LoginAPI(logar) {
    const response = await api.post('/', logar);
    return response.data;
  }
