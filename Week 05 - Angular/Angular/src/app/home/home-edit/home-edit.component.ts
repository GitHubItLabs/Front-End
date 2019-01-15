import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../services/service';

@Component({
  selector: 'home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.scss']
})
export class HomeEditComponent implements OnInit {
  loading: boolean = true;
  edit: boolean;
  id: string;
  addUserForm: FormGroup;
  post: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: Service,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    let state = this.activatedRoute.snapshot.params.mode;
    state == 'edit' ? this.edit = true : this.edit = false;
    this.buildForm();

    if (this.edit) {
      this.getOnePost();
    }
  }

  getOnePost() {
    this.service.getUser(this.id).subscribe(res => {
      this.post = res;
      this.buildForm(this.post);
    })
  }

  buildForm(form?) {
    this.addUserForm = this.formBuilder.group({
      name: [!!form ? form.name : '', [Validators.required]],
      username: [!!form ? form.username : '', [Validators.required]],
      email: [!!form ? form.email : '', [Validators.required]],
      phone: [!!form ? form.phone : '', [Validators.required]]
    })

    this.loading = false;
  }

  addUser() {
    let form = this.addUserForm.value;
    this.service.addNewUser(form).subscribe(_ => {
      this.toastr.success(`New user is added.`);
    }, err => {
      this.toastr.error(err);
    })
  }

  updateUser() {
    let form = this.addUserForm.value;
    this.service.updateCurrent(this.id, form).subscribe(_ => {
      this.toastr.success(`User is updated.`);
    }, err => {
      this.toastr.error(err);
    })
  }

  submit() {
    if (this.edit) {
      this.updateUser();
    } else {
      this.addUser();
    }
  }

}
