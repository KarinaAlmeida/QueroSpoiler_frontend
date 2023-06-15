import api from './api';

export async function SignUpAPI(register) {
    const response = await api.post('/signup', register);
    return response.data;
  }
