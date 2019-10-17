import { User } from '../models/user';
import {  Injectable } from '@angular/core';

import * as Data from '../../../assets/MOCK_DATA.json';

export class UserService {

  constructor() {
    this.list = (Data as any).default.map(user => new User(user));
  }

  list: User[] = [];

  save(user: User): void {
    user.id = this.count() + 1;
    this.list.push(user);
  }

  count(): number {
    return this.list.length;
  }

  updateUser(user: User): User {
    const ind = this.list.findIndex(usr => user.id == usr.id);
    this.list[ind] = user;

    return this.list[ind];
  }

  deleteUser(user: User): void {
    const ind = this.list.findIndex(usr => user.id == usr.id);

    this.list.splice(ind,1);
  }
}
