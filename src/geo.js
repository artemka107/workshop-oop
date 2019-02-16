import axios from 'axios';

const baseURL = 'http://ip-api.com/json/';

class Geo {
  constructor(httpModule = axios) {
    this.httpModule = httpModule;
  }

  async get(ip) {
    const { data } = await this.httpModule.get(ip, { baseURL });
    if (data.status === 'fail') {
      throw new Error('You entered wrong ip address');
    }
    return data;
  }
}

export default Geo;


// export default (httpModule = axios) => async (ip) => {
//   const { data } = await httpModule.get(ip, { baseURL });
//   if (data.status === 'fail') {
//     throw new Error('You entered wrong ip address');
//   }
//   return data;
// };
