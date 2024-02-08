import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { MessageService } from 'primeng/api';
import { Country, Maker, Port, PortList, Supply, SupplyList } from '@app-pages/settings/setting';
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
// import { Customer, RequisitionFormData, RequisitionList } from './customer';
// import { CustomerService } from '../customerservice';
import { EquipmentService } from '@app-pages/inventory/equipment/equipment.service';
import { Customer, RequisitionFormData, RequisitionList } from '@app-pages/inventory/requisition/add-requisition/customer';
import { CustomerService } from '@app-pages/inventory/requisition/add-requisition/customerservice';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUpload } from 'primeng/fileupload';
import { formatDate } from '@angular/common';
import { InventoryService } from '@app-pages/inventory/vessel-inventory/inventory.service';

@Component({
  selector: 'ngx-add-vendor-requisition',
  templateUrl: './add-vendor-requisition.component.html',
  styleUrls: ['./add-vendor-requisition.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class AddVendorRequisitionComponent implements OnInit {


  dropDownCountrylist: Country[];
  formTitle: string = "Add";
  selectedItem: any;
  nbForm: FormGroup;
  customErrorStateMatcher = new CustomStateError()
  requisition: Requisition[];
  dropDownVendorList: Vendor[];
  dropDownVesselList: Vessel[];
  dropDownPortList: Port[];
  dropDownfixtureList: Fixture[];
  vendorStatus: any;
  selectedValue: any;
  supply: Supply[];
  dropDownSupplyList: Supply[];
  getFixtureRecods: number;
  priceControl: FormControl;
  selectedCustomers: Customer[] = [];
  requisitionData: any;
  requisitionDataSave: any;
  requisitionOrderDetails: any;
  selectedVesselId: number = null;
  updatedMinOrderQtyValues: number[] = [];
  modeByRequisition: any;



  storeDataInArray: any[] = [];
  changeMinOrderQty: any;

  editRequisitionListData: any;
  equipment: any;
  fileName: any;
  base64File: any;
  loading: boolean = false;
  makerDropdown: any;
  imageURL:string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipmentService: EquipmentService,
    private vendorService: VendorService,
    private vesselService: VesselService,
    private customerService: CustomerService,
    private portService: PortService,
    private supplyService: SupplyService,
    private requisitionService: RequisitionService,
    private inventoryService: InventoryService,
    private formBuilder: FormBuilder,) {
    this.nbForm = this.formBuilder.group({
      RequisitionId: "",
      VendorId: [null, Validators.required],
      VesselId: [null, Validators.required],
      PortId: [null, Validators.required],
      SupplyDate: ['', Validators.required],
      MURFixtureNo: [null, Validators.required],
      AgentAddress: [''],
      Contact: [''],
      TotalCost: [''],
      // TypeOfSupplyId: [null, Validators.required],
      Invoice: [''],
      Attachment: [''],
      FilePath: [null]
    });
  }
  ngOnInit(): void {
    // console.log(this.selectedItem,'this.selectedItem')

    this.route.queryParams.subscribe(params => {
      this.selectedItem = params['ID'];
      this.modeByRequisition = params['data']
      console.log(this.modeByRequisition)
      //        this.selectedItem = params['editDetails'];
      // Now you have both the ID and data in your component
    });
    // this.getDropdownList();
    this.getVendorListRecords(1, 100, '');
    this.getVesselListRecords(1, 100, '')
    this.getPortList(1, 100, '');
    this.getSupplyListRecords(1, 100, '')
    this.getVendorStatusList()

    if (this.selectedItem !== undefined) {
      this.getDataFromIdrequisitionManagement(this.selectedItem)

      if (this.modeByRequisition === 'RequisitionView') {
        this.formTitle = "Vendor"
      } else {

        this.formTitle = "Update"
      }

    } else {
      this.requisitionManagementList();

    }



  }

  // async getDropdownList() {
  //   await this.inventoryService.getMakerList().subscribe((res: Maker) => {
  //     this.makerDropdown = res
  //   })

  // }

  async getDataFromIdrequisitionManagement(requisitionId) {
    await this.requisitionService.getEditRequisitionWithEquipmentID(requisitionId).subscribe((res: RequisitionList) => {
      debugger;
      this.requisitionOrderDetails = res[0]
      if (this.requisitionOrderDetails.DeliveryChallan !== null) {

        this.imageURL = this.requisitionService.RequisitionUrl + 'OrderChallan/' + this.requisitionOrderDetails.DeliveryChallan;
      } else {
        this.imageURL = null
      }
      const updatedData = {
        "EquipmentManagementList": res[0].EquipmentManagementList.map(category => ({
          ...category,
          EquipmentList: category.EquipmentList.filter(equipment => equipment.MinOrderQty > 0)
        }))
      };
      const filteredCategories = updatedData.EquipmentManagementList.filter(category =>
        category.EquipmentList.some(equipment => equipment.MinOrderQty > 0)
      );

      console.log(updatedData, "this")
      this.requisitionData = filteredCategories;
      const totalList = this.requisitionData.flatMap(category => category.EquipmentList)
      let totalSum = 0;
      totalList.forEach(item => {
        totalSum += item.Total;
      });
      this.nbForm.setValue({
        RequisitionId: res[0].RequisitionId,
        VendorId: res[0].VendorId,
        VesselId: res[0].VesselId,
        PortId: res[0].PortId,
        SupplyDate: [formatDate(res[0].SupplyDate, 'MMM dd,yyyy', 'en')],
        MURFixtureNo: res[0].MURFixtureNo,
        AgentAddress: res[0].AgentAddress,
        Contact: res[0].Contact,
        // TypeOfSupplyId: res[0].TypeOfSupplyId,
        // VendorStatusId: res[0].VendorStatusId,
        Invoice: res[0].Invoice,
        TotalCost: totalSum,
        Attachment: "",
        FilePath: null

      });
      this.getFixtureList(this.nbForm.value.VesselId)


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

  getFixtureList(vesselId) {
    // this.nbForm.get('MURFixtureNo').setValue(null);
    //debugger
    if (this.selectedItem !== undefined) {
      this.selectedValue = vesselId
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
  getVendorStatusList() {
    this.requisitionService.getVendorStatusList().subscribe(res => {
      this.vendorStatus = res
    })
  }
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

  close(selectedBack) {
    // this.dialogRef.close();
    if (selectedBack === 'vendorRequisition') {
      this.router.navigate(['/pages/inventory/vendor-requisition']);

    } else {
      this.router.navigate(['/pages/inventory/requisition']);

    }
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

  onSubChange(selectedQty) {
    const equipment = this.requisitionData
      .flatMap(category => category.EquipmentList)
      .find(equipment => equipment.EquipmentId === this.changeMinOrderQty?.EquipmentId);
    if (equipment) {
      equipment.Subtotal = this.changeMinOrderQty.PricePerUnit * this.changeMinOrderQty[selectedQty];
    }
    console.log('hits changes')
    this.onTotalChange(equipment.Subtotal)
  }
  onTotalChange(taxVal) {
    debugger;
    const totalList = this.requisitionData.flatMap(category => category.EquipmentList)
    const equipment = totalList.find(equipment => equipment.EquipmentId === this.changeMinOrderQty?.EquipmentId);
    // if (equipment && this.changeMinOrderQty?.Subtotal && this.changeMinOrderQty.DeliveryCharges && this.changeMinOrderQty.OtherCharges && this.changeMinOrderQty.Tax) {
      equipment.Total = (+this.changeMinOrderQty?.Subtotal) + (+this.changeMinOrderQty.DeliveryCharges) + (+this.changeMinOrderQty.OtherCharges) + (+this.changeMinOrderQty.Tax);

    // }
    let totalSum = 0;
    totalList.forEach(item => {
      totalSum += item.Total;
    });

    this.nbForm.get('TotalCost').setValue(totalSum);
  }
  saveDraf() {

  }
  submit(selectedAction, recentStatus) {
    debugger;
    const recentValue = recentStatus.target.innerHTML
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
          // TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
          Invoice: this.nbForm.value.Invoice,
          // VendorStatusId: this.nbForm.value.VendorStatusId,
          FilePath: this.nbForm.value.FilePath,
          EquipmentManagementList: this.requisitionData,
        };
        if (recentValue === 'Accepted' || recentValue === 'Rejected'|| recentValue==='Dispatch' || recentValue==='Submit Quote') {
          if (recentValue === 'Accepted') {
            this.requisitionDataSave.RequisitionStatus = 'Accepted';
          } else if(recentValue==='Dispatch'){
            this.requisitionDataSave.RequisitionStatus = 'Dispatched';
          }else if(recentValue==='Submit Quote'){
            this.requisitionDataSave.RequisitionStatus = 'OnGoing';
          }
          else {
            this.requisitionDataSave.RequisitionStatus = recentValue;
          }
        } else {
          this.requisitionDataSave.RequisitionStatus = this.requisitionOrderDetails.RequisitionStatus
        }
        console.log(this.requisitionDataSave, "value oif edit")

        this.requisitionService.updateVendorRequisitionDetail(this.requisitionDataSave, selectedAction).subscribe(res => {
          if (res == true) {

            // this.dialogRef.close(this.requisitionDataSave);
            if (recentValue === 'Accepted' || recentValue === 'Rejected' || recentValue === 'Mark Received') {

              this.router.navigate(['/pages/inventory/requisition']);
              this.loading = false
            } else {
              this.router.navigate(['/pages/inventory/vendor-requisition']);
              this.loading = false
            }


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
          // TypeOfSupplyId: this.nbForm.value.TypeOfSupplyId,
          // VendorStatusId: this.nbForm.value.VendorStatusId,
          Invoice: this.nbForm.value.Invoice,
          FilePath: this.nbForm.value.FilePath,
          EquipmentManagementList: this.requisitionData,
        };
        const requisitionDetails = this.nbForm.value
        this.requisitionService.addRequisitionDetail(this.requisitionDataSave).subscribe(res => {
          debugger
          if (res == true) {
            this.loading = false
            // this.dialogRef.close(requisitionDetails);
          }
        })
      }
    } else {
      this.nbForm.markAllAsTouched();
    }

  }

  onUpload(event: FileUpload) {
    //debugger
    try {
      const file = event.files[0]
      console.log(file, "primeng")
      this.convertToBase64(file);
    } catch (error) {
      this.fileName = null;
      this.base64File = null;
    }
    console.log(this.nbForm.value.FilePath)
  }


  pdfSrc: string;
  convertToBase64(file: File) {
    //debugger
    this.nbForm.get('Attachment')?.setValue(file.name)
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // this.pdfSrc = base64String
      const base64Value = base64String.replace("data:application/pdf;base64,", "")
      this.nbForm.get('FilePath')?.setValue(base64Value)
    };
    reader.readAsDataURL(file);
  }
  CreateNew(city) {

    alert("Create New Clicked : " + city)
    return city
  }


  getEquipmentId(selectedRow) {
    console.log(selectedRow, "get id of quipment");
    this.requisitionService.getEquipmentMakerList(selectedRow).subscribe(res => {
      this.makerDropdown = res;
    })

  }

}







