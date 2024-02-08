import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import {  NbDialogService } from "@nebular/theme";
import { AddOperatorComponent } from "@app-pages/settings/vessel-operator/add-operator/add-operator.component";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { VesselOperator, VesselOperatorList } from "@app-pages/settings/vessel-operator/vessel-operator";
import { VesselOperatorService } from "@app-pages/settings/vessel-operator/vessel-operator.service";

@Component({
  selector: 'ngx-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class OperatorListComponent implements OnInit {



  vessel: VesselOperator[];
  checkListRecord: boolean = false;





  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  emptymessage: string;
  totalCount: number;
  firstCount: number = 1;
  nextCount: number;
  currentPage: number;
  totalRows: number = 0;
  selectedRows: any;
  filterTableValue:string;
  tableRows: any[]
  
  currentPageReportTemplate: string = '';
  countValue: number;

  // vessel: { VesselId: number; VesselName: string; IMONumber: number; FleetTypeId: number; FleetId: number; DWT_T: number; Activenumber: boolean; }[];

  constructor(


    private vesselOperatorService: VesselOperatorService,

    private dialogService: NbDialogService, private messageService: MessageService
  ) {

  }
  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 10;
    this.currentPage = 1;
    this.totalRows = 10
    this.getCargoListRecords(this.currentPage, this.selectedRows, "");
    // this.getCargoListRecords(1,100,'');
    // this.productService.getProducts().then((data) => {
    //   this.vessel = data});


    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "VesselOperatorName", header: "Vessel Operator Name" },


    ];

    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getCargoListRecords(cpage,nRows,filter) {
    this.checkListRecord = false
    this.vesselOperatorService.getOperatorList(cpage,nRows,filter).subscribe((res: VesselOperatorList) => {
      this.vessel = res.VesselOperatorData;
      this.totalCount = res.Count;
      if (this.vessel.length === 0) {
        this.emptymessage = 'No Record Found'
      } 
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }
  openWithoutBackdrop() {
    this.open(false, false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddOperatorComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getCargoListRecords(this.currentPage, this.selectedRows, "");
      }
    });;
  }



  editDetails(editDetails: VesselOperator) {
    this.dialogService.open(AddOperatorComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getCargoListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: VesselOperator) {
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
        // User clicked "Yes", perform the desired action
        this.vesselOperatorService.deleteOperator(deleteRecord).subscribe(res => {
          if (res == true) {
            this.getCargoListRecords(this.currentPage, this.selectedRows, "");
            this.showPop('error', 'Delete', 'Record Deleted');
          }
        })
      } else if (result === false) {
        // User clicked "No", perform a different action
      } else {
        // Handle other possible button values or dialog closure
      }
    });

  }
  hideRow(id) {
    console.log(id)
  }
  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }

  paginate(pagiNo) {
    console.log(pagiNo)
    this.firstCount = pagiNo.first + 1;
    this.nextCount = pagiNo.first + (+pagiNo.rows);
    this.currentPage = pagiNo.page;
    this.getCargoListRecords(this.currentPage, +pagiNo.rows, "");

  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getCargoListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    debugger;

    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getCargoListRecords(this.currentPage, totalRows, "")
  }

}






