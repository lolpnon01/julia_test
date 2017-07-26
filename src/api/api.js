import request from 'superagent'


export default class API {
  constructor() {
    this.baseUrl = `/users`;
  }

  getUserInfo() {
    return request
      .get(this.baseUrl)
      .then((res) => {
        return res.body;
      });
  }
}
