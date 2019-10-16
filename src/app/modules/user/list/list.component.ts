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

  @ViewChild('formUser', {static: false}) formUser: UserFormComponent;
  userService: UserService = new UserService();

  constructor() {

  }

  ngOnInit( ) {

    this.userService.save(new User({
      id: 0,
      name: 'Jose Guillermo',
      lastName: 'Rios Tovar',
      userName: 'mem619',
      image: 'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg' ,
    }));
  }

  getList(): User[] {
    return this.userService.list;
  }

  openForm(user?: User): void {
    const userSend: User = (user) ? user : new User();
    this.formUser.openModal(userSend);
  }

  saveUser(user: User): void {
    console.log(user);
  }

  deleteUser(user: User): void {
    console.log(user);
  }
}
