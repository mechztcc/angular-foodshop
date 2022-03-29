import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodstoreComponent } from './pages/foodstore/foodstore.component';

const routes: Routes = [
  { path: '', component: FoodstoreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodstoreRoutingModule { }
