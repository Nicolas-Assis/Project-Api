import axios from 'axios';

console.log('Base URL da API:', import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Usa a variável de ambiente
});

export default api;