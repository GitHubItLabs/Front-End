import { Component, OnInit } from '@angular/core';
import { Service } from './services/service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any = [];

  constructor(
    private service: Service
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  delete(id) {
    this.service.deleteUser(id).subscribe(res => {
      this.getAll();

    })

  }
}
