import request from 'superagent'


export default class API {
  constructor() {
    this.baseUrl = `/api`;
  }

  getList() {
    return request
      .get(`${this.baseUrl}/list`)
      .then((res) => {
        return res.body;
      });
  }
}
