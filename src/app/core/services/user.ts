import { User } from '../models/user';
import {  Injectable } from '@angular/core';
import * as Data from '../../../assets/MOCK_DATA.json';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiRoute: string = environment.api + 'users';

  constructor(private http: HttpClient) {
    //this.list = (Data as any).default.map(user => new User(user));

    this.getUsers();
  }

  list: User[] = [];

  getUsers(): void {
    this.http.get(this.apiRoute).subscribe(
      (resp: any) => {
        this.list = resp;
      }
    );
  }

  save(user: User): void {
    this.http.post(this.apiRoute, user).subscribe((a) =>{
      this.getUsers();
    });
  }

  count(): number {
    return this.list.length;
  }

  updateUser(user: User): any {
    this.http.put(this.apiRoute, user).subscribe(() => {
      this.getUsers();
    });
  }

  deleteUser(user: User): void {
    this.http.delete(this.apiRoute + `/${user.id}`).subscribe(() => {
      this.getUsers();
    });
  }
}
