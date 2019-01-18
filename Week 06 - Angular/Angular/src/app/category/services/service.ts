import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class Service {
  endpoint = `${environment.endpoint}`;

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get(this.endpoint + '/categories');
  }

  getCategory(id) {
    return this.http.get(this.endpoint + `/categories/${id}`);
  }

  getNewCategory(data) {
    return this.http.post(this.endpoint + '/categories', data);
  }

  updateCurrent(id, data) {
    return this.http.put(this.endpoint + `/categories/${id}`, data);
  }

  deleteCategory(id) {
    return this.http.delete(this.endpoint + `/categories/${id}`);
  }

}
