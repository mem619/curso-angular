import { User } from '../models/user';
import {  Injectable } from '@angular/core';

import * as Data from '../../../assets/MOCK_DATA.json';

export class UserService {

  constructor() {
   this.list = (Data as any).default.map(user => new User(user));
   console.log(this.list);
  }

  list: User[] = [];

  save(user: User): void {
    user.id = this.count() + 1;
    this.list.push(user);
  }

  count(): number {
    return this.list.length;
  }

  updateUser(): User {
    this.list.find(usr => usr.id)
  }
}
