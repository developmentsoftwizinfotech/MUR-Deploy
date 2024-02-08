import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoldCleaningManagementComponent } from './hold-cleaning-management';
import { HoldCleaningListComponent } from './hold-cleaning-list/hold-cleaning-list.component';

const routes: Routes = [
  {
  path: '',
  component: HoldCleaningManagementComponent,
  children: [
    {
      path: 'hold-cleaning',
      component: HoldCleaningListComponent,
    },
  ]}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoldCleaningManagementRoutingModule { }
