import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryCardComponent } from './components/category-card/category-card.component';


@NgModule({
  declarations: [
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  exports: [
    CategoryCardComponent
  ]
})
export class CategoryModule { }
