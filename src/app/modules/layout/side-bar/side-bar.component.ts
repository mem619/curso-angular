import { Component, OnInit } from '@angular/core';
import { SideBarService } from './side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  hide: boolean = false;

  constructor(private barService: SideBarService) { }

  ngOnInit() {
    this.barService.observable$.subscribe(
      (e) => {
        this.hide = e;
      }
    );
  }

  toggleHide(): void {
    this.hide = !this.hide;
  }
}
