import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sb';

  token: string = '';

  constructor() {
  }
  
  ngOnInit(): void {
    this.token = localStorage.getItem('token');    
  }
}
