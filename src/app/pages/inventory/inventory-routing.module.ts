import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { VesselInventoryListComponent } from './vessel-inventory/vessel-inventory-list/vessel-inventory-list.component';
import { EquipmentComponent } from './equipment/equipment/equipment.component';
import { RequisitionListComponent } from './requisition/requisition-list/requisition-list.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { EquipmentCategoryComponent } from './equipment-category/equipment-category/equipment-category.component';
import { VendorRequisitionListComponent } from './vendor-requisition/vendor-requisition-list/vendor-requisition-list.component';
import { AddVendorRequisitionComponent } from './vendor-requisition/add-vendor-requisition/add-vendor-requisition.component';
import { ViewRequisitionDetailsComponent } from './vendor-requisition/view-requisition-details/view-requisition-details.component';
import { DetailInventoryComponent } from './vessel-inventory/detail-inventory/detail-inventory.component';
import { DetailEquipmentComponent } from './vessel-inventory/detail-equipment/detail-equipment.component';
import { ConsumptionLogComponent } from './vessel-inventory/consumption-log/consumption-log.component';

const routes: Routes = [

  {
    path: '',
    component: InventoryComponent,
    children: [
  {
    path: 'vessel-inventory',
    component: VesselInventoryListComponent,
  },
  {
    path: 'vendor',
    component: VendorListComponent,
  },
  {
    path: 'requisition',
    component: RequisitionListComponent,
  },
  {
    path: 'equipment',
    component: EquipmentComponent,
  },
  {
    path: 'equipment-category',
    component: EquipmentCategoryComponent,
  },
  {
    path: 'vendor-requisition',
    component: VendorRequisitionListComponent,
  },
  {
    path: 'add-vendor-requisition',
    component: AddVendorRequisitionComponent,
  },
  {
    path: 'view-requisition-details',
    component: ViewRequisitionDetailsComponent,
  },
  {
    path: 'vessel-inventory-details',
    component: DetailInventoryComponent,
  },
  {
    path: 'equipment-details',
    component: DetailEquipmentComponent,
  },
  {
    path: 'consumption-log',
    component: ConsumptionLogComponent,
  },
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
