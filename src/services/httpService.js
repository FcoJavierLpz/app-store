import axios from 'axios';
import config from '../config.json';

const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: 2500
});

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete
};
