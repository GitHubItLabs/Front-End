import { Component, OnInit } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
  users: object = [];
  queryParams: object = {
    page: 1,
    limit: 10
  };

  constructor(
    private service: Service
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getCategories()
      .subscribe(res => {
        this.users = res;
      })
  }

  delete(id) {
    this.service.deleteCategory(id)
      .subscribe(res => {
        this.getAll();
      })
  }
}
