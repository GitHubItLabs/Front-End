import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'product-edit-add',
  templateUrl: './product-edit-add.component.html',
  styleUrls: ['./product-edit-add.component.scss']
})
export class ProductEditAddComponent implements OnInit {
  loading: boolean = true;
  edit: boolean;
  products: object = [];
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
      categories: [!!form && form.categories ? form.categories : ''],
      manufacturer: [!!form && form.manufacturer ? form.manufacturer : '', [Validators.required]],
      available: [!!form && form.isAvailable ? form.isAvailable : '', [Validators.required]],
      shortDesc: [!!form && form.shortDesc ? form.shortDesc : '', [Validators.required]],
      description: [!!form && form.description ? form.description : '', [Validators.required]]
    })
    this.loading = false;
  }

  // selectPerent(item) {
  //   let selectedItem = +item.target.value;
  //   if (selectedItem != 0) {
  //     this.addProductForm.controls['parentProductId'].setValue(selectedItem);
  //   } else {
  //     this.addProductForm.removeControl('parentProductId');
  //   }
  // }

  getAll(params) {
    this.service.getProducts(params)
      .subscribe(res => {
        this.products = res;
      })
  }

  addProduct() {
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
