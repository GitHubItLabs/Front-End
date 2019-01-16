import { Component, OnInit } from '@angular/core';
import { Service } from '../../services/service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
    this.service.getUsers(this.queryParams)
    .subscribe(res => {
      this.users = res;
      this.updateParams(this.queryParams);
    })
  }

  delete(id) {
    this.service.deleteUser(id)
    .subscribe(res => {
      this.getAll();

    })

  }

  updateParams (params) {
    this.queryParams = { ...this.queryParams, ...params };
    return this.queryParams;
  }

  pageChange(currentPage){
    this.updateParams({page: currentPage})
    console.log()

  }
}
