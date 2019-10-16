import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  drawerShow: boolean = false;
  drawerOpen: boolean = false;
  showSettingMenu = false;

  btnId:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSettingMenu() {
    this.showSettingMenu = !this.showSettingMenu;
  }

  drawerToggle() {
    this.drawerShow = !this.drawerShow
    this.drawerOpen = !this.drawerOpen
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.drawerOpen = true;
      this.drawerShow = true;
    }, 500);
  }
}
