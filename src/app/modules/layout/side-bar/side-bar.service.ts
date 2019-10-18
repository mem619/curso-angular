import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  barBehavior: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  observable$: Observable<any> = this.barBehavior.asObservable();

  setState(state: boolean): void {
    this.barBehavior.next(state);
  }
}
