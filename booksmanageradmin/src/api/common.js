// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = () => axios.request({
  url: '/api/user',
  method: 'get',
});

export const login = () => axios.request({
  url: '/login',
  method: 'post',
});
