import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()

export class ProductService {
    endpoint = `${environment.endpoint}`;

    constructor(
        private http: HttpClient
    ) { }

    getProducts(params) {
        return this.http.get(this.endpoint + '/products', { params });
    }

    getSearch(input) {
        return this.http.get(this.endpoint + `/products?filter[where][name]=${input.search}`)
    }

    getProduct(id) {
        return this.http.get(this.endpoint + `/products/${id}`);
    }

    getNewProduct(data) {
        return this.http.post(this.endpoint + '/products', data);
    }

    updateCurrent(id, data) {
        return this.http.put(this.endpoint + `/products/${id}`, data);
    }

    deleteProduct(id) {
        return this.http.delete(this.endpoint + `/products/${id}`);
    }

    getCategories() {
        return this.http.get(this.endpoint + '/categories');
    }

}
