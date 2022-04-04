import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../shared/core/guards/auth-guard.guard';
import { FoodstoreDetailPageComponent } from './pages/foodstore-detail-page/foodstore-detail-page.component';
import { FoodstoreComponent } from './pages/foodstore/foodstore.component';

const routes: Routes = [
  { path: '', component: FoodstoreComponent, canActivate: [AuthGuardGuard]},
  { path: 'details/:id', component: FoodstoreDetailPageComponent, canActivate: [AuthGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodstoreRoutingModule { }
