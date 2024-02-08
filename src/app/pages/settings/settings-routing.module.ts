import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortListComponent } from './port/port-list/port-list.component';
import { SettingsComponent } from './settings.component';
import { CargoListComponent } from './cargo/cargo-list/cargo-list.component';
import { ShaListComponent } from './sha/sha-list/sha-list.component';
import { CleaningGangListComponent } from './shore-cleaning/cleaning-gang-list/cleaning-gang-list.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { StatusListComponent } from './status/status-list/status-list.component';
import { FleetTypeListComponent } from './fleet-type/fleet-type-list/fleet-type-list.component';
import { FleetNameListComponent } from './fleet-name/fleet-name-list/fleet-name-list.component';
import { CleaningStagesComponent } from './cleaning-stages/cleaning-stages.component';
import { OprTypeListComponent } from './opr-type/opr-type-list/opr-type-list.component';

import { VesselListComponent } from './vessel/vessel-list/vessel-list.component';
import { OperatorListComponent } from './vessel-operator/operator-list/operator-list.component';
import { ChartererListComponent } from './charterer/charterer-list/charterer-list.component';
import { CircularListComponent } from './circular/circular-list/circular-list.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { UnitListComponent } from './unit/unit-list/unit-list.component';
import { SupplyTypeComponent } from './supply/supply-type/supply-type.component';
import { ApplicabilityComponent } from './applicability/applicability/applicability.component';
import { CleaningMatrixComponent } from './cleaning-matrix/cleaning-matrix.component';
import { MasterDocsComponent } from './document/master-docs/master-docs.component';
import { InventoryDocsComponent } from './document/inventory-docs/inventory-docs.component';
import { MakerListComponent } from './maker/maker-list/maker-list.component';
import { NotInternetComponent } from './not-internet/not-internet.component';


const routes: Routes = [{
 
  path: '',
  component: SettingsComponent,
  children: [
    {
      path: 'port',
      component: PortListComponent,
    },
    {
      path: 'cargo',
      component: CargoListComponent,
    },
    {
      path: 'status',
      component: StatusListComponent,
    },
    {
      path: 'country',
      component: CountryListComponent,
    },
    {
      path: 'sha',
      component: ShaListComponent,
    },
    {
      path: 'shoreClening',
      component: CleaningGangListComponent,
    },

      {
      path: 'fleet-type',
      component: FleetTypeListComponent,
    }, {
      path: 'fleet-name',
      component: FleetNameListComponent,
    },
    {
      path: 'cleaning-stages',
      component: CleaningStagesComponent,
    },
    {
      path: 'cleaning-matrix',
      component: CleaningMatrixComponent,
    },
    {
      path: 'opr-type',
      component: OprTypeListComponent,
    },

    {
      path: 'vessel',
      component: VesselListComponent,
    },{
      path: 'operator',
      component: OperatorListComponent,
    },{
      path: 'charterer',
      component: ChartererListComponent,
    },
    {
      path: 'circular-category',
      component: CircularListComponent,
    },
    {
      path: 'role',
      component: RoleListComponent,
    },
    {
      path: 'unit',
      component: UnitListComponent,
    },
    {
      path: 'supply-type',
      component: SupplyTypeComponent,
    },
    {
      path: 'applicability',
      component: ApplicabilityComponent,
    },
    {
      path: 'master-docs',
      component: MasterDocsComponent,
    },
    {
      path: 'inventory-docs',
      component: InventoryDocsComponent,
    },
    {
      path: 'maker',
      component: MakerListComponent,
    },
   
   
  ]

},
{
  path: 'nointernet/:param',
  component: NotInternetComponent,
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
