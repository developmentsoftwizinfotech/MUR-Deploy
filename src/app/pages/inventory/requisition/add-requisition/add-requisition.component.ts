import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { MessageService } from 'primeng/api';
import { Country, Port, PortList, Supply, SupplyList } from '@app-pages/settings/setting';
import { ConfirmationService } from 'primeng/api';
import { RequisitionService } from "@app-pages/inventory/requisition/requisition.service";
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { root } from 'rxjs/internal-compatibility';
import { Fixture, Requisition, Vendor } from '@app-pages/inventory/inventory';
import { VendorService } from '@app-pages/inventory/vendor/vendor.service';
import { Vessel } from '@app-pages/settings/vessel/vessel';
import { VesselService } from '@app-pages/settings/vessel/vessel.service';
import { PortService } from '@app-pages/settings/port/port.service';
import { SupplyService } from '@app-pages/settings/supply/supply.service';
import { Customer, RequisitionFormData, RequisitionList } from './customer';
import { CustomerService } from './customerservice';
import { EquipmentService } from '@app-pages/inventory/equipment/equipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-requisition',
  templateUrl: './add-requisition.component.html',
  styleUrls: ['./add-requisition.component.scss'],
  providers: [MessageService, ConfirmationService,
    { provide: root, useClass: CustomStateError }
  ]
})

export class AddRequisitionComponent implements OnInit {
  dropDownCountrylist: Country[];
  formTitle: string = "Add";
  selectedItem: RequisitionList;
  nbForm: FormGroup;
  customErrorStateMatcher = new CustomStateError()
  requisition: Requisition[];
  dropDownVendorList: Vendor[];
  dropDownVesselList: Vessel[];
  dropDownPortList: Port[];
  dropDownfixtureList: Fixture[];
  selectedValue: any;
  supply: Supply[];
  dropDownSupplyList: Supply[];
  getFixtureRecods: number;
  priceControl: FormControl;
  selectedCustomers: Customer[] = [];
  requisitionData: any;
  requisitionDataSave: any;
  selectedVesselId: number = null;
  updatedMinOrderQtyValues: number[] = [];

  storeDataInArray: any[] = [];
  changeMinOrderQty: any;

  editRequisitionListData: any;
  equipment: any;
  loading: boolean = false;
  makerDropdown:any;
  constructor(private router: Router, private messageService: MessageService,
    private equipmentService: EquipmentService,
    private vendorService: VendorService,
    private vesselService: VesselService,
    private customerService: CustomerService,
    private portService: PortService,
    private supplyService: SupplyService,
    private requisitionService: RequisitionService,
    private formBuilder: FormBuilder, protected dialogRef: NbDialogRef<AddRequisitionComponent>) {
    this.nbForm = this.formBuilder.group({
      RequisitionId: "",
      VendorId: [null, Validators.required],
      VesselId: [null, Validators.required],
      PortId: [null, Validators.required],
      SupplyDate: ['', Validators.required],
      MURFixtureNo: [null, Validators.required],
      AgentAddress: ['', Validators.required],
      // Contact: ['', Validators.required],
      // TypeOfSupplyId: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    // console.log(this.selectedItem,'this.selectedItem')
    this.getFixtureList()
    this.getVendorListRecords(1, 100, '');
    this.getVesselListRecords(1, 100, '')
    this.getPortList(1, 100, '');
    this.getSupplyListRecords(1, 100, '')
    if (this.selectedItem !== undefined) {
      this.getDataFromIdrequisitionManagement(this.selectedItem.RequisitionId)
      this.formTitle = "Update"

    } else {
      this.requisitionManagementList();

    }

  }



  getDataFromIdrequisitionManagement(requisitionId) {
    this.requisitionService.getEditRequisitionWithEquipmentID(requisitionId).subscribe((res: RequisitionList) => {
      this.requisitionData = res[0].EquipmentManagementList

      this.nbForm.setValue({
        RequisitionId: res[0].RequisitionId,
        VendorId: res[0].VendorId,
        VesselId: res[0].VesselId,
        PortId: res[0].PortId,
        SupplyDate: res[0].SupplyDate,
        MURFixtureNo: res[0].MURFixtureNo,
        AgentAddress: res[0].AgentAddress,
        // Contact: res[0].Contact,
        // TypeOfSupplyId: res[0].TypeOfSupplyId,

      });

    })
  }


  // this.updateListForm = this.fb.group({
  //   CleaningStageId: [""],
  //   CleaningStageName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
  //   ProgressWeightage: ["", [Validators.required, Validators.min(1), Validators.max(100)]],
  //   MinOrderQty: [null, [Validators.required]],
  // });

  onVesselSelectionChange() {
    // console.log('Selected VesselId:', this.selectedVesselId);

  }
  requisitionManagementList() {
    this.requisitionService.getRequisitionManagementList().subscribe((res: RequisitionList) => {
      this.requisitionData = res[0].EquipmentCategorylist
    })
  }

  onFilter(data: any) {
    console.log(data);
  }
  onRowSelect(event) {
    console.log(event);
  }
  getVendorListRecords(cPage, nRows, filter) {
    this.vendorService.getVendorList(cPage, nRows, filter).subscribe((res: any) => {

      this.dropDownVendorList = res.VendorData;
    })
  }

  getVesselListRecords(cPage, nRows, filter) {
    this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      // console.log(res, "getVesselListRecords")
      this.dropDownVesselList = res.VesselData;
      // this.dropDownVesselList.find((res:Vessel)=>{
      //  this.getFixtureRecods= res.VesselId
      // })
    })
  }

  getPortList(cPage, nRows, filter) {
    this.portService.getPortList(cPage, nRows, filter).subscribe((res: PortList) => {
      // console.log(res)
      this.dropDownPortList = res.PortData;
    })
  }

  getFixtureList() {
    // this.nbForm.get('MURFixtureNo').setValue(null);
    //debugger
    if (this.selectedItem !== undefined) {
      this.selectedValue = this.selectedItem.VesselId;
    } else {
      this.selectedValue = this.nbForm.get('VesselId').value;
    }
    this.requisitionService.getFixtureList(this.selectedValue).subscribe((res: Fixture[]) => {
      // console.log(res)
      this.dropDownfixtureList = res;
    })
  }

  getSupplyListRecords(cPage, nRows, filter) {
    this.supplyService.getSupplyList(cPage, nRows, filter).subscribe((res: SupplyList) => {
      // console.log(res)
      this.supply = res.SupplyTypeData;
      this.dropDownSupplyList = res.SupplyTypeData
    })
  }

  // getRequisitionListRecords() {
  //   //debugger
  //   this.requisitionService.getRequisitionList().subscribe((res: Requisition[]) => {
  //     console.log(res)
  //     this.requisition = res;
  //   })
  // }

  // getRequisitionListRecords() {
  //   //debugger
  //   this.requisitionService.getRequisitionList().subscribe((res: Requisition[]) => {
  //     console.log(res)
  //     this.requisition = res;
  //     if (this.selectedItem !== undefined) {
  //       this.nbForm.get('requisitionName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.requisition, 'requisitionName',this.selectedItem.requisitionName)]);
  //       // this.nbForm.get('CargoName').updateValueAndValidity();
  //     } else {
  //       this.nbForm.get('requisitionName').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(50),this.customErrorStateMatcher.duplicateValidator(this.requisition, 'requisitionName', null)]);
  //       // this.nbForm.get('CargoName').updateValueAndValidity();
  //     }
  //   })
  // }

  close() {
    this.dialogRef.close();
  }

  onMinOrderQtyChange(updatedValue: any) {
    debugger
    console.log(updatedValue, "updatedValue")
    this.changeMinOrderQty = updatedValue
    // this.equipment = this.editRequisitionListData
    //   .flatMap(category => category.EquipmentList)
    //   .find(equipment => equipment.EquipmentId === this.changeMinOrderQty?.EquipmentId);
    // if (this.equipment) {
    //   this.equipment.MinOrderQty = this.changeMinOrderQty.MinOrderQty;
    //   // this.editRequisitionListData = this.equipment
    // }

    // vbcvbgf

    // const equipment = this.requisitionData
    // .flatMap(category => category.EquipmentList)
    // .find(equipment => equipment.EquipmentId === updatedValue?.EquipmentId);

    // if (equipment) {
    // equipment.MinOrderQty = updatedValue.MinOrderQty;
    // }

    // this.equipmentService.updateEquipmentDetail(updatedValue).subscribe(res => {
    //   console.log(res,"res")
    //     })

    // console.log(updatedValue.MinOrderQty, "updatedValue")
    // this.updatedMinOrderQtyValues.push(updatedValue.MinOrderQty);

    // const category = this.requisitionData.EquipmentCategorylist.find(category => category.EquipmentCategoryId == updatedValue.equipmentCategoryId);
    //   if (category) {
    //     const equipment = category.EquipmentList.find(item => item.EquipmentId === updatedValue.equipmentId);
    //     if (equipment) {
    //       equipment.MinOrderQty = updatedValue.MinOrderQty;
    //       console.log(`MinOrderQty changed for EquipmentId ${updatedValue.equipmentId} in CategoryId ${updatedValue.equipmentCategoryId}`);
    //     }
    //   }

  }



  getValueVessel(VesselId) {
    this.nbForm.get('MURFixtureNo').setValue(null)

    // this.nbForm.value.MURFixtureNo = null
    console.log
    this.selectedVesselId = VesselId
  }



  submit() {

    if (this.nbForm.valid) {
      this.loading = true
      //set Vessel id and set for send recode
      this.requisitionData.forEach((category) => {
        category.VesselId = this.nbForm.value.VesselId
        category.EquipmentList.forEach((equipment) => {
          equipment.VesselId = this.nbForm.value.VesselId;
        });
      });
      // get Equipment  data which edit
      const equipment = this.requisitionData
        .flatMap(category => category.EquipmentList)
        .find(equipment => equipment.EquipmentId === this.changeMinOrderQty?.EquipmentId);
      if (equipment) {
        equipment.MinOrderQty = this.changeMinOrderQty.MinOrderQty;
      }
      if (this.nbForm.value.SupplyDate !== null) {
        const selectedDate1: Date = new Date(this.nbForm.value.SupplyDate);;
        const timeZoneOffset1 = selectedDate1.getTimezoneOffset();
        selectedDate1.setMinutes(selectedDate1.getMinutes() - timeZoneOffset1);
        const dataPickSupplyDate = selectedDate1.toISOString().split('T')[0];
        this.nbForm.get('SupplyDate').setValue(dataPickSupplyDate);
        console.log(this.nbForm.get('SupplyDate').value, "second")

      }
      // // get data to send api this veriable
      // this.requisitionDataSave = {
      //   RequisitionId: this.nbForm.value.RequisitionId,
      //   VendorId: this.nbForm.value.VendorId,
      //   VesselId: this.nbForm.value.VesselId,
      //   PortId: this.nbForm.value.PortId,
      //   SupplyDate: this.nbForm.value.SupplyDate,
      //   MURFixtureNo: this.nbForm.value.MURFixtureNo,
      //   TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
      //   EquipmentManagementList: this.requisitionData,
      // };

      if (this.selectedItem !== undefined) {
        // editRequisitionListData
        debugger;

        this.requisitionDataSave = {
          RequisitionId: this.nbForm.value.RequisitionId,
          VendorId: this.nbForm.value.VendorId,
          VesselId: this.nbForm.value.VesselId,
          PortId: this.nbForm.value.PortId,
          SupplyDate: this.nbForm.value.SupplyDate,
          MURFixtureNo: this.nbForm.value.MURFixtureNo,
          AgentAddress: this.nbForm.value.AgentAddress,
          // Contact: this.nbForm.value.Contact,
          // TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
          EquipmentManagementList: this.requisitionData,
        };
        console.log(this.requisitionDataSave, "value oif edit")

        this.requisitionService.updateRequisitionDetail(this.requisitionDataSave).subscribe(res => {
          if (res == true) {
            this.dialogRef.close(this.requisitionDataSave);
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
        debugger
        this.requisitionDataSave = {
          RequisitionId: this.nbForm.value.RequisitionId,
          VendorId: this.nbForm.value.VendorId,
          VesselId: this.nbForm.value.VesselId,
          PortId: this.nbForm.value.PortId,
          SupplyDate: this.nbForm.value.SupplyDate,
          MURFixtureNo: this.nbForm.value.MURFixtureNo,
          AgentAddress: this.nbForm.value.AgentAddress,
          // Contact: this.nbForm.value.Contact,
          // TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
          EquipmentManagementList: this.requisitionData,
        };
        const requisitionDetails = this.nbForm.value
        this.requisitionService.addRequisitionDetail(this.requisitionDataSave).subscribe(res => {
          debugger
          if (res == true) {
            this.dialogRef.close(requisitionDetails);
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

  getEquipmentId(selectedRow) {
    console.log(selectedRow, "get id of quipment");
    this.requisitionService.getEquipmentMakerList(selectedRow).subscribe(res => {
      this.makerDropdown = res;
    })

  }

}
