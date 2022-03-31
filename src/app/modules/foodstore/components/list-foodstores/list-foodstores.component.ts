import { Component, Input, OnInit } from '@angular/core';
import { Foodstore } from '../../shared/types/foodstore.interface';

@Component({
  selector: 'app-list-foodstores',
  templateUrl: './list-foodstores.component.html',
  styleUrls: ['./list-foodstores.component.scss']
})
export class ListFoodstoresComponent implements OnInit {

  @Input() foodstores: Foodstore[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.foodstores);
  }

}
