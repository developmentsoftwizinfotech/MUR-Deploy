import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { HoldCleaningReportsComponent } from './hold-cleaning-reports/hold-cleaning-reports.component';
import { HccBudgetSummaryComponent } from './hcc-budget-summary/hcc-budget-summary.component';
import { MisSummaryComponent } from './mis-summary/mis-summary.component';


const routes: Routes = [{
  path: '',
  component: ReportsComponent,
  children: [
    {
      path: 'hold-cleaning-reports',
      component: HoldCleaningReportsComponent,
    },
    {
      path: 'hcc-budget-summary',
      component: HccBudgetSummaryComponent,
    },
    {
      path: 'mis-summary',
      component: MisSummaryComponent,
    },
  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ReportRoutingModule { }
