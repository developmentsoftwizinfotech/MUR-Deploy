import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService, SelectItem } from "primeng/api";
import { NbDialogService } from "@nebular/theme";
import { AddShaComponent } from "@app-pages/settings/sha/add-sha/add-sha.component";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { SHA, SHAList } from '@app-pages/settings/setting';
import { ShaService } from '@app-pages/settings/sha/sha.service';

@Component({
  selector: 'ngx-sha-list',
  templateUrl: './sha-list.component.html',
  styleUrls: ['./sha-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ShaListComponent implements OnInit {

  SHA: any[];
  checkListRecord: boolean = false;
  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
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
    private dialogService: NbDialogService, private shaService: ShaService, private messageService: MessageService
  ) {

  }


  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    this.getSHAListRecords(this.currentPage, this.selectedRows, "");
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);

  }

  getSHAListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    this.shaService.getSHAList(cPage, nRows, filter).subscribe((res: SHAList) => {

      this.SHA = res.SHAData;
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

  openWithoutBackdrop() {
    this.open(false, false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddShaComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getSHAListRecords(this.currentPage, this.selectedRows, "");
      }
    });;
  }



  editDetails(editDetails: SHA) {

    this.dialogService.open(AddShaComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');

        this.getSHAListRecords(this.currentPage, this.selectedRows, "");
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: SHA) {
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
        this.shaService.deleteSHA(deleteRecord).subscribe(res => {
          if (res) {
            this.getSHAListRecords(this.currentPage, this.selectedRows, "");
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
    this.firstCount = pagiNo.first + 1;
    this.nextCount = pagiNo.first + (+pagiNo.rows);
    this.currentPage = pagiNo.page;
    this.getSHAListRecords(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getSHAListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getSHAListRecords(this.currentPage, totalRows, "")
  }
}


















