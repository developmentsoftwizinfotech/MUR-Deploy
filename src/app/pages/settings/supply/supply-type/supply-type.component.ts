import { Component } from '@angular/core';
import { Supply, SupplyList } from '@app-pages/settings/setting';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SupplyService } from '@app-pages/settings/supply/supply.service';

import { NbDialogService } from '@nebular/theme';
import { AddSupplyTypeComponent } from '@app-pages/settings/supply/add-supply-type/add-supply-type.component';
import { DynamicDialogComponent } from '@app-pages/shared/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'ngx-supply-type',
  templateUrl: './supply-type.component.html',
  styleUrls: ['./supply-type.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class SupplyTypeComponent {
  supply: Supply[];
  loading: boolean = true;
  items: { label: string; formName: string };
  cols: { field: string; header: string; }[];
  checkListRecord: boolean = false;
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
    private supplyService: SupplyService,
    private dialogService: NbDialogService,
    private messageService: MessageService
  ) {

  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    this.getSupplyListRecords(this.currentPage, this.selectedRows, "");

    this.items = { label: "Supply Management", formName: "Add Supply" };
    this.cols = [
      { field: "SupplyTypeName", header: "Supply Name" },
    ];


    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getSupplyListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    this.supplyService.getSupplyList(cPage, nRows, filter).subscribe((res: SupplyList) => {
      debugger

      this.supply = res.SupplyTypeData
      ;
      console.log(this.supply ,'this.supply ')
      console.log(res ,'this.res ')
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

  
//  getPortList(cPage, nRows, filter) {
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
    this.dialogService.open(AddSupplyTypeComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getSupplyListRecords(this.currentPage, this.selectedRows, "");
      }
    });;
  }



  editDetails(editDetails: Supply) {
    this.dialogService.open(AddSupplyTypeComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getSupplyListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")

  }


  deleteDetails(deleteRecord: Supply) {
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
        this.supplyService.deleteSupply(deleteRecord).subscribe(res => {
          if (res == true) {
            this.getSupplyListRecords(this.currentPage, this.selectedRows, "");
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
    this.getSupplyListRecords(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getSupplyListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getSupplyListRecords(this.currentPage, totalRows, "")
  }


}
