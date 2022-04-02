import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CreateCategoryModalComponent } from './components/create-category-modal/create-category-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryCardComponent,
    CreateCategoryModalComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CategoryCardComponent
  ]
})
export class CategoryModule { }
