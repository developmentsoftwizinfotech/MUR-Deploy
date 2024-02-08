
import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { FormBuilder } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { LicenseLogComponent } from "@app-pages/settings/vessel/license-log/license-log.component";
import { VendorService } from "@app-pages/inventory/vendor/vendor.service";
import { Vendor } from "@app-pages/inventory/inventory";
import { AddVesselInventoryComponent } from "@app-pages/inventory/vessel-inventory/add-vessel-inventory/add-vessel-inventory.component";
import { InventoryService } from "@app-pages/inventory/vessel-inventory/inventory.service";
import { AddVendorRequisitionComponent } from "../add-vendor-requisition/add-vendor-requisition.component";
import { RequisitionService } from "@app-pages/inventory/requisition/requisition.service";
import { Router } from "@angular/router";

@Component({
  selector: 'ngx-vendor-requisition-list',
  templateUrl: './vendor-requisition-list.component.html',
  styleUrls: ['./vendor-requisition-list.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class VendorRequisitionListComponent implements OnInit {


  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  checkListRecord: boolean = false;
  dataLoaded: boolean = false;
  emptymessage: string;
  requisition: any[];
  requisitionData: any;
  requisitionListData: any;
  activeIndex: number;
  filterStatus: any;
  loginVendor: any;
  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private requisitionService: RequisitionService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService,

  ) {

  }
  ngOnInit() {

    const currentUser = localStorage.getItem('currentUser');
    const activeUserId = JSON.parse(currentUser);
    this.loginVendor = activeUserId.VendorId
    this.activeIndex = 0

    this.getRequisitionListRecords(this.loginVendor, 'NewOrder');
    this.requisitionManagementList();
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  requisitionManagementList() {
    this.requisitionService.getRequisitionManagementList().subscribe((res: any) => {
      this.requisitionData = res[0].EquipmentCategorylist
      console.log(res, "dataapi")
      console.log(res[0], 'this.requisitionData.VendorName')
    })

  }


  getRequisitionListRecords(vendorId, filter) {
    this.checkListRecord = false
    //debugger
    this.requisitionService.getVendorLoginList(vendorId, filter).subscribe((res: any[]) => {
      // this.requisitionService.getRequisitionManagementList().subscribe((res: any) => {
      this.requisitionListData = res
      // const requisitionListData = res
      console.log(this.requisitionListData, "requisitionListData")

      console.log(res[0], "requisitionListData")

      // this.requisition = res
      if (res.length === 0) {
        this.emptymessage = 'No Record Found'

      }
      setTimeout(() => { this.checkListRecord = true }, 200);

      // setTimeout(() => {
      //   // this.dataLoaded = true; // Set the flag to indicate data is loaded
      //   this.checkListRecord =true
      // }, 9000);
      // this.requisition = res;

    })
  }
  openWithoutBackdrop() {
    this.open(false, false);
  }

  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddVendorRequisitionComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {

      if (data !== undefined) {
        this.getRequisitionListRecords(1, 'NewOrder');
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
  }


  addRequisition() {
    // this.router.navigate(['/pages/report/hold-cleaning-reports', voyageId]);
    this.router.navigate(['/pages/inventory/add-vendor-requisition']);
  }



  editDetials(editDetails: any) {
    //debugger
    console.log(editDetails.RequisitionId)
    const ID = editDetails.RequisitionId
    this.router.navigate(['/pages/inventory/add-vendor-requisition'], {
      queryParams: { ID },
    });

    // this.dialogService.open(AddVendorRequisitionComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
    //   if (data !== undefined) {
    //     this.getRequisitionListRecords();
    //     this.showPop('success', 'Success', 'Record Saved');
    //   }
    // });;


  }

  deleteDetails(deleteRecord: any) {
    const dialogRef = this.dialogService.open(DynamicDialogComponent, {
      context: {
        title: "Dynamic Dialog",
        message: 'Are You Sure Want To Delete',
        buttons: [
          { label: 'Cancel', value: false, status: 'basic' },
          { label: 'Delete', value: true, status: 'danger' },
        ],
      },
    });
    ////debugger;
    dialogRef.onClose.subscribe((result: any) => {
      if (result === true) {

        this.requisitionService.deleteRequisition(deleteRecord).subscribe(res => {
          if (res) {
            this.getRequisitionListRecords(this.loginVendor, 'NewOrder');
            this.showPop('error', 'Delete', 'Record Deleted')
          }
        })
      } else if (result === false) {

      } else {

      }
    });

  }
  viewLog(selectedRow: any) {
    this.dialogService.open(AddVendorRequisitionComponent, { context: { selectedItem: selectedRow }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      // if (data !== undefined) {
      //   this.getRequisitionListRecords();
      //   this.showPop('success', 'Success', 'Record Saved');
      // }
    });;
  }
  viewDetails(selectedRow: any) {
    console.log(selectedRow.RequisitionId);
    this.router.navigate(['/pages/inventory/view-requisition-details'], {
      queryParams: { ID:selectedRow.RequisitionId },
    });

  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
  changeStatusList(orderStatus) {
    this.filterStatus = orderStatus
    this.getRequisitionListRecords(this.loginVendor, this.filterStatus)
    switch (orderStatus) {
      case "NewOrder":
        // Code to handle a new order
        this.activeIndex = 0
        break;

      case "Ongoing":
        // Code to handle an order in progress
        this.activeIndex = 1
        break;

      case "Completed":
        // Code to handle a completed order
        this.activeIndex = 2
        break;


    }
  }

}








