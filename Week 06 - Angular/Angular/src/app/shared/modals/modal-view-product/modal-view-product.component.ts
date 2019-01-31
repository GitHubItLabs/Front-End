import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-view-product',
  templateUrl: './modal-view-product.component.html',
  styleUrls: ['./modal-view-product.component.scss']
})
export class ModalViewProductComponent {
  currentName: string;
  currentDescription: string;
  currentManufacturer: string;


  @Output() submit = new EventEmitter<any>();
  @ViewChild('modalViewProduct') dialogTemplate: ElementRef;

  constructor(
    private modalService: NgbModal
  ) { }


  open(content) {
    this.currentName = content.name;
    this.currentManufacturer = content.manufacturer;
    this.currentDescription = content.shortDescription;
    this.modalService.open(this.dialogTemplate, {
      ariaLabelledBy: 'modalViewProduct'
    }).result.then((close) => {
      console.log('close');
      this.submit.emit(content.id);
    }, (dismiss) => {
      console.log('dismiss')
    });
  }
}
