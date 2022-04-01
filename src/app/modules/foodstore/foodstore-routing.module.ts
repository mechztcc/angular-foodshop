import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodstoreDetailPageComponent } from './pages/foodstore-detail-page/foodstore-detail-page.component';
import { FoodstoreComponent } from './pages/foodstore/foodstore.component';

const routes: Routes = [
  { path: '', component: FoodstoreComponent },
  { path: 'details/:id', component: FoodstoreDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodstoreRoutingModule { }
