
import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { NbDialogService } from "@nebular/theme";
import { AddUnitComponent } from "@app-pages/settings/unit/add-unit/add-unit.component";
import {  Unit, UnitList } from '@app-pages/settings/setting';
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { UnitService } from '@app-pages/settings/unit/unit.service';

@Component({
  selector: 'ngx-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class UnitListComponent implements OnInit {
  unit: Unit[];
  checkListRecord: boolean = false;
  items: { label: string; formName: string };
  cols: { field: string; header: string; }[];
  emptymessage: string;
  tableRows: any[]
  selectedRows: any;
  firstCount: number = 1;
  currentPage: number;
  nextCount: number;
  totalRows: number = 0;
  totalCount: number;
  filterTableValue: any;
  currentPageReportTemplate: string = '';
  countValue: number;

 

  constructor(
    private unitService: UnitService,
    private dialogService: NbDialogService,
    private messageService: MessageService
  ) {

  }
  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    this.getUnitListRecords(this.currentPage, this.selectedRows, "");

    // this.getUnitListRecords();
    this.items = { label: "Unit Management", formName: "Add Unit" };
    this.cols = [
      { field: "UnitName", header: "Unit Name" },
    ];

    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getUnitListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    this.unitService.getUnitList(cPage, nRows, filter).subscribe((res: UnitList) => {
      this.unit = res.UnitData;
      this.totalCount = res.Count;
      this.countValue = res.Count
      if (this.currentPageReportTemplate === "") {
        this.currentPageReportTemplate = `Showing ${(1)} to ${this.selectedRows} of ${this.totalCount} entries`;
      }
      // if (res.length === 0) {
      //   this.emptymessage = 'No Record Found'
      // } 
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }

  // getPortList(cPage, nRows, filter) {
  //   this.portService.getPortList(cPage, nRows, filter).subscribe((res: PortList) => {
  //     this.port = res.PortData;
  //     this.totalCount = res.Count
  //     if (this.currentPageReportTemplate === "") {
  //       this.currentPageReportTemplate = `Showing ${(1)} to ${this.selectedRows} of ${this.totalCount} entries`;
  //     }
  //     // if (res.PortData.length === 0) {
  //     //   this.emptymessage = 'No Record Found'
  //     // } 
  //     setTimeout(() => { this.checkListRecord = true }, 200);
  //   })
  // }


  openWithoutBackdrop() {
    this.open(false, false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddUnitComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getUnitListRecords(this.currentPage, this.selectedRows, "");
      }
    });;
  }



  editDetails(editDetails: Unit) {
    this.dialogService.open(AddUnitComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getUnitListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")

  }


  deleteDetails(deleteRecord: Unit) {
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
        this.unitService.deleteUnit(deleteRecord).subscribe(res => {
          if (res == true) {
            this.getUnitListRecords(this.currentPage, this.selectedRows, "");
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

  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }

  paginate(pagiNo) {
    this.firstCount = pagiNo.first + 1;
    this.nextCount = pagiNo.first + (+pagiNo.rows);
    this.currentPage = pagiNo.page;
    this.getUnitListRecords(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getUnitListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getUnitListRecords(this.currentPage, totalRows, "")
  }

}







