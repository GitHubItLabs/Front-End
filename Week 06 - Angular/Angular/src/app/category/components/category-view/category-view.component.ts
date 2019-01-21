import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
  searchForm: FormGroup;
  categories: object = [];
  queryParams: object = {
    page: 1,
    limit: 10
  };
  bla: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: CategoryService
  ) { }

  ngOnInit() {
    this.getAll(this.queryParams);
    this.buildForm()
  }

  buildForm() {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required]]
    })
  }

  getAll(params) {
    this.service.getCategories(params)
      .subscribe(res => {
        this.categories = res;
      })
  }

  delete(id) {
    this.service.deleteCategory(id)
      .subscribe(_ => {
        this.getAll(this.queryParams);
      })
  }

  updateParams(params) {
    this.queryParams = { ...this.queryParams, ...params };
    return this.queryParams;
  }

  search() {
    debugger;
    let search = this.searchForm.value;
    this.service.getSearch(search).subscribe(res => {
      this.categories = res;
    })
  }

  clear() {
    this.buildForm()
    this.getAll(this.queryParams);
  }

}
