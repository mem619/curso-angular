import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../core/services/user';
import { User } from '../../../core/models/user';
import { ModalComponent } from '../../shared/modal/modal.component';
import { UserFormComponent } from '../user-form/user-form.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild('formUser', {static: false})
  formUser: UserFormComponent;
  userService: UserService = new UserService();
  order: string = 'asc';

  constructor() { }
  ngOnInit( ) {}

  setOrder(): void {
    this.order = (this.order == 'asc') ? 'desc' :  'asc';
  }

  getList(): User[] {
    return this.userService.list;
  }

  openForm(user?: User): void {
    const userSend: User = (user) ? user : new User();
    this.formUser.openModal(userSend);
  }

  saveUser(user: User): void {
    if (!user.id) {
      this.userService.save(user);
    } else {
      this.userService.updateUser(user);
    }
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user);
  }
}
