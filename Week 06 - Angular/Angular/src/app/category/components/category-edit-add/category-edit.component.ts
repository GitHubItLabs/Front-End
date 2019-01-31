import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../services/category-service';

@Component({
  selector: 'category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  loading: boolean = true;
  edit: boolean;
  categories: object = [];
  id: string;
  addCategoryForm: FormGroup;
  post: object = {};
  queryParams: object = {
    page: 1,
    limit: 10
  };

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CategoryService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    let state = this.activatedRoute.snapshot.params.mode;
    state == 'edit' ? this.edit = true : this.edit = false;
    this.buildForm();
    this.getAll(this.queryParams);

    if (this.edit) {
      this.getOneCategory();
    }
  }

  getOneCategory() {
    this.service.getCategory(this.id)
      .subscribe(res => {
        this.post = res;
        this.buildForm(this.post);
      })
  }

  buildForm(form?) {
    this.addCategoryForm = this.formBuilder.group({
      name: [!!form && form.name ? form.name : '', [Validators.required]],
      parentCategoryId: [!!form && form.parentCategoryId ? form.parentCategoryId : ''],
      description: [!!form && form.description ? form.description : '', [Validators.required]]
    })
    this.loading = false;
  }

  selectPerent(item) {
    let selectedItem = +item.target.value;
    if (selectedItem != 0) {
      this.addCategoryForm.controls['parentCategoryId'].setValue(selectedItem);
    } else {
      this.addCategoryForm.removeControl('parentCategoryId');
    }
  }

  getAll(params) {
    this.service.getCategories(params)
      .subscribe(res => {
        this.categories = res;
      })
  }

  addCategory() {
    let form = this.addCategoryForm.value;
    this.service.getNewCategory(form)
      .subscribe(_ => {
        this.toastr.success(`New category is added.`);
        this.router.navigate(['/category']);
      }, err => {
        this.toastr.error(err.message);
      })
  }

  updateCategory() {
    let form = this.addCategoryForm.value;
    this.service.updateCurrent(this.id, form)
      .subscribe(_ => {
        this.toastr.success(`Category is updated.`);
        this.router.navigate(['/category']);
      }, err => {
        this.toastr.error(err);
      })
  }

  submit() {
    (this.edit) ? this.updateCategory() : this.addCategory();
  }

}
