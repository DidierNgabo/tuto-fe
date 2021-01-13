import axios from 'axios';

export default class TutorialDataService {
  static getAll() {
    return axios.get('http://localhost:3000/api/tutorials');
  }

  static getId(id) {
    return axios.get(`http://localhost:3000/api/tutorials/${id}`);
  }

  static create(data) {
    return axios.post('http://localhost:3000/api/tutorials', data);
  }

  static delete(id) {
    return axios.delete(`http://localhost:3000/api/tutorials/${id}`);
  }

  static update(id, data) {
    return axios.put(`http://localhost:3000/api/tutorials/${id}`, data);
  }
}
