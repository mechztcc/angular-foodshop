import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isOpened: boolean = false;
  menuItems: any[] = [
    {title: 'titulo', path: 'caminho', icon: 'icone'}
  ];

  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handle() {
    this.isOpened = !this.isOpened;
  }

}
