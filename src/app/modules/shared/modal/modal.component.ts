import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalRef: BsModalRef;

  @Input()
  title: string = 'Modal';

  @Output()
  accep: EventEmitter<any> = new EventEmitter();

  @Output()
  cancel: EventEmitter<any> = new EventEmitter();

  @ViewChild('lgModal', {static: false}) element;

  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.element.show();
  }

  private close(): void {
    this.cancel.emit();
    this.hide();
  }

  private  accept(): void {
    this.accep.emit();
    this.hide();
  }

  private hide(): void {
    this.element.hide();
  }
}
