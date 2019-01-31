import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  searchForm: FormGroup;
  products: any = [];
  queryParams: any = {
    page: 1,
    limit: 10
  };

  constructor(
    private formBuilder: FormBuilder,
    private service: ProductService
  ) { }

  ngOnInit() {
    this.getAll(this.queryParams);
    this.buildForm();
  }

  buildForm() {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required]]
    })
  }

  getAll(params) {
    this.service.getProducts(params)
      .subscribe(res => {
        this.products = res;
        this.products.map(x => {
          this.getProductName(x);
        })
      })
  }

  getProductName(x) {
    this.products.map(i => {
      if (i.parentProductId === x.id) {
        i['categoryName'] = x.name
      }
    });
  }

  delete(id) {
    this.service.deleteProduct(id)
      .subscribe(_ => {
        this.getAll(this.queryParams);
      })
  }

  updateParams(params) {
    this.queryParams = { ...this.queryParams, ...params };
    return this.queryParams;
  }

  search() {
    let search = this.searchForm.value;
    this.service.getSearch(search).subscribe(res => {
      this.products = res;
    })
  }

  clear() {
    this.buildForm()
    this.getAll(this.queryParams);
  }

}
