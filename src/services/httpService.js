import axios from 'axios';
import { baseUrl } from '../config.json';

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 2500
});

return {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete
}