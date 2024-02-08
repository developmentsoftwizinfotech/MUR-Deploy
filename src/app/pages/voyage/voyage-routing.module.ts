import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoyageComponent } from './voyage.component';
import { AddVoyageComponent } from './voyage-list/add-voyage/add-voyage.component';
import { VoyageListComponent } from './voyage-list/voyage-list.component';
import { VoyageMergeListComponent } from './voyage-merge/voyage-merge-list/voyage-merge-list.component';
import { MergeVoyageComponent } from './voyage-merge/merge-voyage/merge-voyage.component';
import { VoyageAnnualBudgetComponent } from './voyage-annual-budget/voyage-annual-budget.component';

const routes: Routes = [
  {
  path: '',
  component: VoyageComponent,
  children: [
    {
      path: 'add-voyage',
      component: AddVoyageComponent,
    },

    {
      path: 'voyage-list',
      component: VoyageListComponent,
    },
    {
      path: 'voyage-merge-list',
      component: VoyageMergeListComponent,
    },
    {
      path: 'merge-voyage',
      component: MergeVoyageComponent,
    },
    {
      
      path: 'voyage-budget',
      component: VoyageAnnualBudgetComponent,
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoyageRoutingModule {

}
