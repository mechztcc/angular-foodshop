import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../shared/core/guards/auth-guard.guard';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'dashboard', component: HomeComponent, canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
