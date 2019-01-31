import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'product-edit-add',
  templateUrl: './product-edit-add.component.html',
  styleUrls: ['./product-edit-add.component.scss']
})
export class ProductEditAddComponent implements OnInit {
  loading: boolean = true;
  edit: boolean;
  products: object = [];
  categories: object = [];
  id: string;
  addProductForm: FormGroup;
  post: object = {};
  queryParams: object = {
    page: 1,
    limit: 10
  };

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    let state = this.activatedRoute.snapshot.params.mode;
    state == 'edit' ? this.edit = true : this.edit = false;
    this.buildForm();
    this.getAll(this.queryParams);
    this.getCategories();

    if (this.edit) {
      this.getOneProduct();
    }
  }

  getOneProduct() {
    this.service.getProduct(this.id)
      .subscribe(res => {
        this.post = res;
        this.buildForm(this.post);
      })
  }

  buildForm(form?) {
    this.addProductForm = this.formBuilder.group({
      name: [!!form && form.name ? form.name : '', [Validators.required]],
      manufacturer: [!!form && form.manufacturer ? form.manufacturer : '', [Validators.required]],
      isAvailable: [!!form && form.isAvailable ? form.isAvailable : ''],
      shortDescription: [!!form && form.shortDescription ? form.shortDescription : ''],
      fullDescription: [!!form && form.fullDescription ? form.fullDescription : '']
    })
    this.loading = false;
  }

  selectCategory(item) {
    debugger;
    let selectedItem = +item.target.value;
    this.addProductForm.controls['categoryId'].setValue(selectedItem);
  }

  getAll(params) {
    this.service.getProducts(params)
      .subscribe(res => {
        this.products = res;
      })
  }

  getCategories() {
    this.service.getCategories()
      .subscribe(res => {
        this.categories = res;
      })
  }

  addProduct() {
    debugger
    let form = this.addProductForm.value;
    this.service.getNewProduct(form)
      .subscribe(_ => {
        this.toastr.success(`New product is added.`);
        this.router.navigate(['/products']);
      }, err => {
        this.toastr.error(err.message);
      })
  }

  updateProduct() {
    let form = this.addProductForm.value;
    this.service.updateCurrent(this.id, form)
      .subscribe(_ => {
        this.toastr.success(`Product is updated.`);
        this.router.navigate(['/products']);
      }, err => {
        this.toastr.error(err);
      })
  }

  submit() {
    (this.edit) ? this.updateProduct() : this.addProduct();
  }

}
