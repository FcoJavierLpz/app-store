import axios from 'axios';
import config from '../config.json';

const instance = axios.create({
  baseURL: config.baseUrl
});

export default {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete
};
