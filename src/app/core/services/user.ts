import { User } from '../models/user';
import {  Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  list: User[] = [];

  save(user: User): void {
    user.id = this.count() + 1;
    this.list.push(user);
  }

  count(): number {
    return this.list.length;
  }
}
