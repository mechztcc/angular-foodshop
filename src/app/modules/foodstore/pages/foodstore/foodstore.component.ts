import { Component, OnInit } from '@angular/core';
import { FoodstoreService } from '../../shared/services/foodstore.service';
import { Foodstore } from '../../shared/types/foodstore.interface';

@Component({
  selector: 'app-foodstore',
  templateUrl: './foodstore.component.html',
  styleUrls: ['./foodstore.component.scss']
})
export class FoodstoreComponent implements OnInit {

  isLoading: boolean = false;
  foodstores: Foodstore[] = [];

  constructor(private foodstoreService: FoodstoreService) { }

  ngOnInit(): void {
    this.listAllByUser();
  }

  listAllByUser() {
    this.isLoading = true;
    this.foodstoreService.findAllByUser()
      .subscribe((data: Foodstore[]) => {
        this.foodstores = data;
        console.log(data);

      }).add(() => {
        this.isLoading = false;
      });
  }

}
