import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodstoreRoutingModule } from './foodstore-routing.module';
import { FoodstoreComponent } from './pages/foodstore/foodstore.component';


@NgModule({
  declarations: [
    FoodstoreComponent
  ],
  imports: [
    CommonModule,
    FoodstoreRoutingModule
  ]
})
export class FoodstoreModule { }
