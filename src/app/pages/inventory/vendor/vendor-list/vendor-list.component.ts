import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { FormBuilder } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import {  NbDialogService, NbToastrService } from "@nebular/theme";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { AddVendorComponent } from "@app-pages/inventory/vendor/add-vendor/add-vendor.component";
import { ViewVendorComponent } from "@app-pages/inventory/vendor/view-vendor/view-vendor.component";
import { Vendor } from '@app-pages/inventory/inventory';
import { VendorService } from '@app-pages/inventory/vendor/vendor.service';

@Component({
  selector: 'ngx-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class VendorListComponent   implements OnInit{
  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  vendor: Vendor[];
  checkListRecord: boolean = false;
  emptymessage: string;
  selectedRows: any;
  firstCount: number = 1;
  currentPage: number;
  nextCount: number;
  totalRows: number = 0;
  totalCount: number;
  filterTableValue: any;
  constructor(
    private primengConfig: PrimeNGConfig,
    private vendorService: VendorService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {
  }
  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    this.getVendorListRecords(this.currentPage, this.selectedRows, "");
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getVendorListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    //debugger
    this.vendorService.getVendorList(cPage,nRows,filter).subscribe((res: any) => {
      this.vendor = res.VendorData;
      this.totalCount = res.Count;
            if(res.length === 0){
        this.emptymessage = 'No Record Found'
  }
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }
  openWithoutBackdrop() {
    this.open(false, false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddVendorComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getVendorListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
  }

  editDetials(editDetails: Vendor) {
    this.dialogService.open(AddVendorComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getVendorListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")
  }

  deleteDetails(deleteRecord: Vendor) {
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
          this.vendorService.deleteVendor(deleteRecord).subscribe(res => {
          if (res) {
            this.getVendorListRecords(this.currentPage, this.selectedRows, "");
            this.showPop('error', 'Delete', 'Record Deleted')
          }
        })
      } else if (result === false) {
          } else {
            }
    });
  }
  viewLog(selectedRow) {
    this.dialogService.open(ViewVendorComponent, { context: { selectedItem: selectedRow }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getVendorListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
  }

  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }
  // selectedTab: number = 1;
  // dataForTable1: any[] = [
  //   { column1: 'Data 1', column2: 'Data 2' },
  //   { column1: 'Data 3', column2: 'Data 4' },
  //   // Add more data objects for Table 1 if needed
  // ];
  // dataForTable2: any[] = [
  //   { columnA: 'Data A', columnB: 'Data B' },
  //   { columnA: 'Data C', columnB: 'Data D' },
  //   // Add more data objects for Table 2 if needed
  // ];

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.vendor);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
  // Add code for Paginator...
  paginate(pagiNo) {
    console.log(pagiNo)
    this.firstCount = pagiNo.first + 1;
    this.nextCount = pagiNo.first + (+pagiNo.rows);
    this.currentPage = pagiNo.page;
    this.getVendorListRecords(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getVendorListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    debugger;
    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getVendorListRecords(this.currentPage, totalRows, "")
  }

}






