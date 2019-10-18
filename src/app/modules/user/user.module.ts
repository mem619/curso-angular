import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListComponent, UserFormComponent, UserDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [ ListComponent]
})
export class UserModule { }
