import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ ListComponent]
})
export class UserModule { }
