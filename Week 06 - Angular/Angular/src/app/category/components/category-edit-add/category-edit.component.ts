import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../services/category-service';
import { Location } from '@angular/common';

@Component({
  selector: 'category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  loading: boolean = true;
  edit: boolean;
  id: string;
  addCategoryForm: FormGroup;
  post: object = {};

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: CategoryService,
    private toastr: ToastrService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    let state = this.activatedRoute.snapshot.params.mode;
    state == 'edit' ? this.edit = true : this.edit = false;
    this.buildForm();

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
      // id: [!!form ? form.id : '', [Validators.required]],
      name: [!!form ? form.name : '', [Validators.required]],
      parentCategoryId: [!!form ? form.parentCategoryId : '', [Validators.required]]
    })

    this.loading = false;
  }

  addCategory() {
    let form = this.addCategoryForm.value;
    this.service.getNewCategory(form)
    .subscribe(_ => {
      this.toastr.success(`New category is added.`);
    }, err => {
      this.toastr.error(err);
    })
  }

  updateCategory() {
    let form = this.addCategoryForm.value;
    this.service.updateCurrent(this.id, form)
    .subscribe(_ => {
      this.toastr.success(`Category is updated.`);
    }, err => {
      this.toastr.error(err);
    })
  }

  submit() {
    if (this.edit) {
      this.updateCategory();
    } else {
      this.addCategory();
    }
    this._location.back();
  }

}
