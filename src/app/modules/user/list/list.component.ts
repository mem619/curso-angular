import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user';
import { User } from '../../../core/models/user';
import { Address } from 'src/app/core/models/address';
import { Phone } from 'src/app/core/models/phone';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  address: Address = new Address();
  phone: Phone = new Phone();
  user: User = new User();

  constructor(private userService: UserService) {

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

  saveUser(): void {
    this.userService.save(this.user);
    this.user = new User();
  }

  addPhone(): void {
    this.user.phones.push(this.phone);
    this.phone = new Phone();
  }

  addAddress(): void {
    this.user.addresses.push(this.address);
    this.address = new Address();
  }

  getList(): User[] {
    return this.userService.list;
  }
}
