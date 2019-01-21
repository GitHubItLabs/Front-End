import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class CategoryService {
  endpoint = `${environment.endpoint}`;

  constructor(
    private http: HttpClient
  ) { }

  getCategories(params) {
    return this.http.get(this.endpoint + '/categories', { params });
  }

  getSearch(input) {
    return this.http.get(this.endpoint + `/categories?filter[where][name]=${input.search}`)
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
