import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodstoreRoutingModule } from './foodstore-routing.module';
import { FoodstoreComponent } from './pages/foodstore/foodstore.component';
import { ListFoodstoresComponent } from './components/list-foodstores/list-foodstores.component';
import { CardCreateFoodstoreComponent } from './components/card-create-foodstore/card-create-foodstore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FoodstoreComponent,
    ListFoodstoresComponent,
    CardCreateFoodstoreComponent
  ],
  imports: [
    CommonModule,
    FoodstoreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class FoodstoreModule { }
