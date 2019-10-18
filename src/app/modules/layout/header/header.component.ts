import { Component, OnInit } from '@angular/core';
import { SideBarService } from '../side-bar/side-bar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private barService: SideBarService) { }

  ngOnInit() {
  }

  changeState(): void {
    this.barService.setState(false);
  }
}
