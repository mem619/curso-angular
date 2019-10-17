import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { SortPipe } from 'src/app/core/pipes/sort-arr.pipe';

@NgModule({
  declarations: [ModalComponent, SortPipe],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [ModalComponent, SortPipe]
})
export class SharedModule { }
