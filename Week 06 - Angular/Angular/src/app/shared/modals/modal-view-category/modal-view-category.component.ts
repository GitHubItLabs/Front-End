import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-view-category',
  templateUrl: './modal-view-category.component.html',
  styleUrls: ['./modal-view-category.component.scss']
})
export class ModalViewCategoryComponent {
  currentName: string;
  currentDescription: string;


  @Output() submit = new EventEmitter<any>();
  @ViewChild('modalViewCategory') dialogTemplate: ElementRef;

  constructor(
    private modalService: NgbModal
  ) { }


  open(content) {
    this.currentName = content.name;
    this.currentDescription = content.description;
    this.modalService.open(this.dialogTemplate, {
      ariaLabelledBy: 'modalViewCategory'
    }).result.then((close) => {
      console.log('close');
      this.submit.emit(content.id);
    }, (dismiss) => {
      console.log('dismiss')
    });
  }
}
