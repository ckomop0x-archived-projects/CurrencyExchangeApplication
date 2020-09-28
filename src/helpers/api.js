import axios from 'axios';

export const api = options => axios({
  method: options.method || 'GET', // api method
  url: options.url,  // api URL
  headers: { 'Content-Type': 'application/json' }
});
