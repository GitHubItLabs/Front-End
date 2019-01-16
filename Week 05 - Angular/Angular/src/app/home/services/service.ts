import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class Service {
  endpoint = `${environment.endpoint}`;

  constructor(
    private http: HttpClient
  ) { }

  getUsers(params) {
    let { page, limit } = params;
    return this.http.get(this.endpoint + `/users?_page=${page}&_limit=${limit}`);
  }

  getUser(id) {
    return this.http.get(this.endpoint + `/users/${id}`);
  }

  addNewUser(data) {
    return this.http.post(this.endpoint + '/users', data);
  }

  updateCurrent(id, data) {
    return this.http.put(this.endpoint + `/users/${id}`, data);
  }

  deleteUser(id) {
    return this.http.delete(this.endpoint + `/users/${id}`, { params: id });
  }

}
