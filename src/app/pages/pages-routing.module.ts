import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import { AuthGuard } from '../auth/login/auth.guard';
import { ReportModule } from './report/report.module';
import { NotificationDialogComponent } from './shared/notification-dialog/notification-dialog.component';




const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    // {
    //   path: 'iot-dashboard',
    //   component: DashboardComponent,
    // },


    // {
    //   path: 'vendor-list',
    //   component: VendorListComponent,
    // },
    {
      path: 'notification/:id',
      component: NotificationDialogComponent,
    },




    {
      path: 'circular',
      canActivate: [AuthGuard],

      loadChildren: () => import('./circular/circular.module')
        .then(m => m.CircularModule),
    },

    {
      path: 'dashboard-menu-management',
      canActivate: [AuthGuard],
      loadChildren: () => import('./dashboard-menu-management/dashboard-menu-management.module')
        .then(m => m.DashboardMenuManagementModule),
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'voyage',
      canActivate: [AuthGuard],

      loadChildren: () => import('./voyage/voyage.module')
        .then(m => m.VoyageModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    // {
    //   path: 'tables',
    //   loadChildren: () => import('./tables/tables.module')
    //     .then(m => m.TablesModule),
    // },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },

    {
      path: 'settings',
      canActivate: [AuthGuard],

      loadChildren: () => import('./settings/settings.module')
        .then(m => m.SettingsModule),
    },

    {
      path: 'report',
      canActivate: [AuthGuard],

      loadChildren: () => import('./report/report.module')
        .then(m => m.ReportModule),
    },
    {
      path: 'analysis',
      canActivate: [AuthGuard],

      loadChildren: () => import('./analysis/analysis.module')
        .then(m => m.AnalysisModule),
    },

    {
      path: 'inventory',
      canActivate: [AuthGuard],

      loadChildren: () => import('./inventory/inventory.module')
        .then(m => m.InventoryModule),
    },

    {
      path: 'holdCleaningManagement',
      canActivate: [AuthGuard],

      loadChildren: () => import('./hold-cleaning-management/hold-cleaning-management.module')
        .then(m => m.HoldCleaningManagementModule),
    },

    {
      path: '',
      redirectTo: 'dashboard-menu-management/dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
