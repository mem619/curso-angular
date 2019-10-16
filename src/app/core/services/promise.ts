import { User } from '../models/user';

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
