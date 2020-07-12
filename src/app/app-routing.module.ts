import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {WorkersDashboardComponent} from "./components/workers-dashboard/workers-dashboard.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: WorkersDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
