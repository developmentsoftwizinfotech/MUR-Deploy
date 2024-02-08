import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { FormBuilder } from "@angular/forms";
import { ConfirmationService, MessageService, SelectItem } from "primeng/api";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { AddRequisitionComponent } from "@app-pages/inventory/requisition/add-requisition/add-requisition.component";
import { RequisitionService } from "@app-pages/inventory/requisition/requisition.service";
import { Requisition } from "@app-pages/inventory/inventory";
import { ViewRequistionComponent } from "@app-pages/inventory/requisition/view-requistion/view-requistion.component";
import { RequisitionList } from "../add-requisition/customer";
import { Router } from "@angular/router";

@Component({
  selector: 'ngx-requisition-list',
  templateUrl: './requisition-list.component.html',
  styleUrls: ['./requisition-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class RequisitionListComponent implements OnInit {
  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  checkListRecord: boolean = false;
  dataLoaded: boolean = false;
  emptymessage: string;
  requisition: Requisition[];
  requisitionData: any;
  requisitionListData: any;
  activeIndex:number;
  filterStatus:any;
  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private requisitionService: RequisitionService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {

  }
  ngOnInit() {
    this.activeIndex=0
    this.getRequisitionListRecords('NewOrder');
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


  getRequisitionListRecords(filter) {
    this.checkListRecord = false
    //debugger
    this.requisitionService.getRequisitionList(filter).subscribe((res: Requisition[]) => {
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
    this.dialogService.open(AddRequisitionComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {

      if (data !== undefined) {
        this.getRequisitionListRecords('NewOrder');
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
  }



  editDetials(editDetails: RequisitionList) {
    //debugger
    this.dialogService.open(AddRequisitionComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getRequisitionListRecords('NewOrder');
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;


  }

  deleteDetails(deleteRecord: Requisition) {
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
            this.getRequisitionListRecords('NewOrder');
            this.showPop('error', 'Delete', 'Record Deleted')
          }
        })
      } else if (result === false) {

      } else {

      }
    });

  }
  viewVendorRequisition(requisitionId: any,RequisitionView) {
    this.router.navigate(['/pages/inventory/add-vendor-requisition'],{
      queryParams: {ID: requisitionId, data: RequisitionView  },
    });
  }
  viewDetails(requisitionId: any,RequisitionView) {
    this.router.navigate(['/pages/inventory/view-requisition-details'],{
      queryParams: {ID: requisitionId, data: RequisitionView  },
    });
  }

  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }


  changeStatusList(orderStatus){
    this.filterStatus=orderStatus
this.getRequisitionListRecords(this.filterStatus)
    switch (orderStatus)
    {
        case "NewOrder":
            // Code to handle a new order
            this.activeIndex=0
            break;

        case "Ongoing":
            // Code to handle an order in progress
          this.activeIndex=1
            break;

        case "Completed":
            // Code to handle a completed order
        this.activeIndex=2
            break;


    }
  }

}







