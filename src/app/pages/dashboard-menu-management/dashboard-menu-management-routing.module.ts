import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMenuManagementComponent } from './dashboard-menu-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardMenuManagementComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardMenuManagementRoutingModule { }

