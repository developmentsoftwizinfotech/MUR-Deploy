import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbAutocompleteComponent } from '@nebular/theme';

import { MessageService } from 'primeng/api';
import { Country, Port } from '@app-pages/settings/setting';
import { ConfirmationService } from 'primeng/api';
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
import { InventoryService } from '../inventory.service';
import { Condition, EquipmentFieldList, InventoryVessel, Maker } from '@app-pages/inventory/inventory';
import { Vessel } from '@app-pages/settings/vessel/vessel';
import { PortService } from '@app-pages/settings/port/port.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-vessel-inventory',
  templateUrl: './add-vessel-inventory.component.html',
  styleUrls: ['./add-vessel-inventory.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class AddVesselInventoryComponent implements OnInit {
  vesselDropdown: Country[];
  portDropdown: Port[];
  formTitle: string = "Add";
  selectedItem: any;
  nbForm: FormGroup;
  equipmentField: EquipmentFieldList;
  makerDropdown: Maker;
  conditionDropdown: Condition;
  loading: boolean = false
  constructor(private router: Router, private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private inventoryService: InventoryService,
    private vesselService: VesselService,
    private portService: PortService,
    private formBuilder: FormBuilder, protected dialogRef: NbDialogRef<AddVesselInventoryComponent>) {
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
    this.getVesselListRecords(1, 100, '')

    if (this.selectedItem !== undefined) {
      this.getRecordEdit(this.selectedItem.VesselId)

      this.formTitle = "Update"
      this.nbForm.setValue({
        VesselInventoryId: this.selectedItem.VesselInventoryId,
        VesselId: this.selectedItem.VesselId,
        MinimumLevelsMaintained: this.selectedItem.MinimumLevelsMaintained,
        LastSupplyDate: this.selectedItem.LastSupplyDate,
        ActiveInventoryCost: this.selectedItem.ActiveInventoryCost,
        Active: true,
        IsArchived: false

      });
      this.getVessel(this.selectedItem.VesselId)
    }
  }
  async getDropdownList() {
    await this.inventoryService.getMakerList().subscribe((res: Maker) => {
      this.makerDropdown = res
    })
    await this.inventoryService.getConditionList().subscribe((res: Condition) => {
      this.conditionDropdown = res
    })
    this.getPortListRecords(1, 100, '');
  }

  getRecordEdit(selectedVessel) {
    this.inventoryService.getEditInventory(selectedVessel).subscribe((res: InventoryVessel) => {
      console.log(res, 'Edit By id')
    }
    )
  }

  getVesselListRecords(cPage, nRows, filter) {
    this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      this.vesselDropdown = res.VesselData;

    })
  }
  async getPortListRecords(cPage, nRows, filter) {
    await this.portService.getPortList(cPage, nRows, filter).subscribe((res: any) => {
      this.portDropdown = res.PortData;

    })
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

  close() {

    this.dialogRef.close();
  }

  clearForm() {
    this.equipmentField = null
  }

  submit() {
    if (this.nbForm.valid) {
      this.loading = true
      // const countriesCovered = this.nbForm.value.CountriesCovered1;
      // const changeCountriesCovered = countriesCovered.join(",");
      // this.nbForm.get('CountriesCovered').setValue(changeCountriesCovered);
      const inventoryDetails = this.nbForm.value;
      const inventoryVesselDetail = {
        VesselInventoryId: inventoryDetails.VesselInventoryId,
        VesselId: inventoryDetails.VesselId,
        MinimumLevelsMaintained: inventoryDetails.MinimumLevelsMaintained,
        LastSupplyDate: inventoryDetails.LastSupplyDate,
        ActiveInventoryCost: inventoryDetails.ActiveInventoryCost,
        Active: true,
        IsArchived: false,
        VesselInventoryManagementList: this.equipmentField
      }
      if (this.selectedItem !== undefined) {
        this.inventoryService.updateInventoryDetail(inventoryVesselDetail).subscribe(res => {
          if (res == true) {
            this.loading = false
            this.dialogRef.close(inventoryDetails);
          } else {
            this.loading = false
            this.showPop('warn', 'Alert', 'Somthing went wrong');
          }
        },
          (error) => {
            if (error.status === 404 || error.status === 500) {
              this.router.navigate(['/error']);
            }
          })
      } else {
        console.log(inventoryVesselDetail, "Post Data")
        this.inventoryService.addInventoryDetail(inventoryVesselDetail).subscribe(res => {
          debugger;
          console.log(res, "post suc")
          if (res == true) {
            this.loading = false
            this.dialogRef.close(inventoryDetails);
          } else {
            this.loading = false
            this.showPop('warn', 'Alert', 'Somthing went wrong');
          }
        },
          (error) => {
            if (error.status === 404 || error.status === 500) {
              this.router.navigate(['/error']);
            }
          })
      }

    } else {
      this.nbForm.markAllAsTouched();
    }
  }


  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }







}






