import axios from 'axios';

const baseURL = 'http://ip-api.com/json/';

export default (httpModule = axios) => async (ip) => {
  const { data } = await httpModule.get(ip, { baseURL });
  if (data.status === 'fail') {
    throw new Error('You entered wrong ip address');
  }
  return data;
};
