import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showNav: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleNav() {
    this.showNav = !this.showNav;
  }

  navigate(n: number) {

    if(n == 1) {
      this.router.navigate(['dashboard'])
    }

    if(n == 3) {
      this.router.navigate(['foodstores'])
    }
  }

}
