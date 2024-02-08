import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequisitionList } from '@app-pages/inventory/requisition/add-requisition/customer';
import { RequisitionService } from '@app-pages/inventory/requisition/requisition.service';
import { PortService } from '@app-pages/settings/port/port.service';
import { InventoryService } from '../inventory.service';
import { Condition, EquipmentFieldList } from '@app-pages/inventory/inventory';
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
import { Vessel } from '@app-pages/settings/vessel/vessel';
import { formatDate } from '@angular/common';

@Component({
  selector: 'ngx-detail-inventory',
  templateUrl: './detail-inventory.component.html',
  styleUrls: ['./detail-inventory.component.scss']
})
export class DetailInventoryComponent implements OnInit {
  selectedItem: any;
  requisitionOrderDetails: any;
  requisitionData: any;
  modeByRequisition: string;
  imageURL: string;
  nbForm: FormGroup;
  portDropdown: any
  conditionDropdown: Condition
  vesselDropdown: Vessel;
  makerDropdown: any;
  equipmentField: any;
  constructor(private route: ActivatedRoute, private portService: PortService, private inventoryService: InventoryService, private vesselService: VesselService,
    private formBuilder: FormBuilder, private router: Router, private requisitionService: RequisitionService) {
    this.nbForm = this.formBuilder.group({
      VesselInventoryId: [''],
      VesselId: [null, Validators.required],
      MinimumLevelsMaintained: ['', Validators.required],
      LastSupplyDate: ['', Validators.required],
      ActiveInventoryCost: ['', [Validators.required]],
      Active: true,
      IsArchived: true

    });

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedItem = params['ID'];
      this.modeByRequisition = params['data']
      console.log(this.modeByRequisition, 'value of re view')
      //        this.selectedItem = params['editDetails'];
      // Now you have both the ID and data in your component
    });
    this.getVesselListRecords(1, 100, '')
    this.getDataFromIdrequisitionManagement(this.selectedItem)
    this.getVessel(this.selectedItem.VesselId)
  }

  async getDataFromIdrequisitionManagement(inventoryId) {
    await this.inventoryService.getInventoryItemDetails(inventoryId).subscribe((res: any) => {
      debugger;
      console.log(res[0], "result of items")
      this.requisitionData = res;
      // if (this.requisitionOrderDetails.DeliveryChallan !== null) {

      //   this.imageURL = this.requisitionService.RequisitionUrl + 'OrderChallan/' + this.requisitionOrderDetails.DeliveryChallan;
      // } else {
      //   this.imageURL = null
      // }
      // const updatedData = {
      //   "EquipmentManagementList": res[0].EquipmentManagementList.map(category => ({
      //     ...category,
      //     EquipmentList: category.EquipmentList.filter(equipment => equipment.MinOrderQty > 0)
      //   }))
      // };
      // const filteredCategories = updatedData.EquipmentManagementList.filter(category =>
      //   category.EquipmentList.some(equipment => equipment.MinOrderQty > 0)
      // );

      // console.log(updatedData, "this")
      // this.requisitionData = filteredCategories;
      // const totalList = this.requisitionData.flatMap(category => category.EquipmentList)
      // let totalSum = 0;
      // totalList.forEach(item => {
      //   totalSum += item.Total;
      // });

      // this.nbForm.setValue({
      //   VesselInventoryId: '',
      //   VesselId: res[0].VesselId,
      //   // PortId: res[0].PortId,
      //   LastSupplyDate: [formatDate(res[0].SupplyDate, 'MMM dd,yyyy', 'en')],
      //   // MURFixtureNo: res[0].MURFixtureNo,
      //   // AgentAddress: res[0].AgentAddress,
      //   // Contact: res[0].Contact,
      //   // TypeOfSupplyId: res[0].TypeOfSupplyId,
      //   // VendorStatusId: res[0].VendorStatusId,
      //   MinimumLevelsMaintained: '',
      //   ActiveInventoryCost: totalSum,
      //   Active: true,
      //   IsArchived: true

      // });

    })
  }
  async getPortListRecords(cPage, nRows, filter) {
    await this.portService.getPortList(cPage, nRows, filter).subscribe((res: any) => {
      this.portDropdown = res.PortData;

    })
  }
  async getDropdownList() {
    await this.inventoryService.getMakerList().subscribe((res: any) => {
      this.makerDropdown = res
    })
    await this.inventoryService.getConditionList().subscribe((res: Condition) => {
      this.conditionDropdown = res
    })
    this.getPortListRecords(1, 100, '');
  }

  getVessel(selectedVessel) {
    const vessel = selectedVessel;
    console.log(vessel, 'get value id')
    this.getDropdownList();
    if (vessel !== undefined) {
      if (this.selectedItem !== undefined) {
        this.inventoryService.getEditInventory(vessel).subscribe((res: any) => {
          debugger;
          this.equipmentField = res.VesselInventoryManagementList
        })
      } else {
        this.inventoryService.getEquipmentFieldList(vessel).subscribe((res: EquipmentFieldList) => {
          console.log(res, 'List of field')
          this.equipmentField = res
        })
      }
    } else {
      this.equipmentField = null
    }
  }
  getVesselListRecords(cPage, nRows, filter) {
    this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      this.vesselDropdown = res.VesselData;

    })
  }

  close() {
    this.router.navigate(['/pages/inventory/vessel-inventory']);

  }
  clearForm() {

  }

  submit() {

  }
  viewSupplyLog(equipemntId: number,imo, details) {
    this.router.navigate(['/pages/inventory/equipment-details'], {
      queryParams: { Id: this.selectedItem,ImoNumber:imo, equipmentId: equipemntId },
    });
  }
  viewConsumptionLog(equipemntId: number, details) {
    this.router.navigate(['/pages/inventory/consumption-log'], {
      queryParams: { Id: this.selectedItem, equipmentId: equipemntId },
    });
  }


}
