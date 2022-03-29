import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodstoreRoutingModule } from './foodstore-routing.module';
import { FoodstoreComponent } from './pages/foodstore/foodstore.component';
import { ListFoodstoresComponent } from './components/list-foodstores/list-foodstores.component';


@NgModule({
  declarations: [
    FoodstoreComponent,
    ListFoodstoresComponent
  ],
  imports: [
    CommonModule,
    FoodstoreRoutingModule
  ]
})
export class FoodstoreModule { }
