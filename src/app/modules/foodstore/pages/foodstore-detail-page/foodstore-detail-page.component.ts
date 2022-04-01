import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodstoreService } from '../../shared/services/foodstore.service';
import { Foodstore } from '../../shared/types/foodstore.interface';

@Component({
  selector: 'app-foodstore-detail-page',
  templateUrl: './foodstore-detail-page.component.html',
  styleUrls: ['./foodstore-detail-page.component.scss']
})
export class FoodstoreDetailPageComponent implements OnInit {

  foodstore: Foodstore;
  isLoading: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private foodstoreService: FoodstoreService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    const { id } = this.activatedRoute.snapshot.params;
    this.isLoading = true;
    this.foodstoreService.getDetails(id)
      .subscribe((data: Foodstore) => {
        this.foodstore = data;
        console.log(data);
      }).add(() => {
        this.isLoading = false;
      });
  }

}
