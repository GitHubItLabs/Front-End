import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDelteComponent {
  currentName: string;
  currentId: string;
  currentUsername: string;

  @Output() submit = new EventEmitter<any>();
  @ViewChild('modalDelete') dialogTemplate: ElementRef;

  constructor(
    private modalService: NgbModal
  ) { }


  open(item) {
    this.currentName = item.name;
    this.currentId = item.id;
    this.currentUsername = item.username
    return this.modalService.open(this.dialogTemplate, {
      ariaLabelledBy: 'modal-basic-title',
    }).result.then((close) => {
      console.log('close');
      this.submit.emit(item.id);
    }, (dismiss) => {
      console.log('dismiss')
    });
  }

}
