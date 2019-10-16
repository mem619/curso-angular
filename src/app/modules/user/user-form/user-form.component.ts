import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Phone } from 'src/app/core/models/phone';
import { User } from 'src/app/core/models/user';
import { Address } from 'src/app/core/models/address';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  address: Address = new Address();
  phone: Phone = new Phone();
  user: User = new User();

  @Output()
  save: EventEmitter<User> = new EventEmitter<User>();

  @ViewChild('modaladdress', {static: false}) modalAdress: ModalComponent;
  @ViewChild('modaluser', {static: false}) modaluser: ModalComponent;

  constructor() { }

  ngOnInit() {
  }


  openModal(user: User): void {
    this.user = user;
    this.modaluser.show();
  }

  private addPhone(): void {
    this.user.phones.push(this.phone);
    this.phone = new Phone();
  }

  private addAddress(): void {
    this.user.addresses.push(this.address);
    this.address = new Address();
  }

  private saveUser(): void {
    this.save.emit(this.user);
  }
}
