import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.scss']
})
export class ModalViewComponent {
  currentName: string;
  currentDescription: string;


  @Output() submit = new EventEmitter<any>();
  @ViewChild('modalView') dialogTemplate: ElementRef;

  constructor(
    private modalService: NgbModal
  ) { }


  open(content) {
    this.currentName = content.name;
    this.currentDescription = content.description;
    this.modalService.open(this.dialogTemplate, {
      ariaLabelledBy: 'modalView'
    }).result.then((close) => {
      console.log('close');
      this.submit.emit(content.id);
    }, (dismiss) => {
      console.log('dismiss')
    });
  }
}
