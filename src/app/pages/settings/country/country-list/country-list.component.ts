
import { Component, OnInit } from "@angular/core";

import { ConfirmationService, MessageService } from "primeng/api";
import { NbDialogService } from "@nebular/theme";
import { AddCountryComponent } from "@app-pages/settings/country/add-country/add-country.component";
import { Country, CountryList } from '@app-pages/settings/setting';
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";

import { CountryService } from "@app-pages/settings/country/country.service";
@Component({
  selector: 'ngx-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class CountryListComponent implements OnInit {

  country: Country[];


  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
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
    private countryService: CountryService,
    private dialogService: NbDialogService, private messageService: MessageService) {

  }
  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    this.getCountryListRecords(this.currentPage, this.selectedRows, "");
    // this.getCargoListRecords();
    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "CountryName", header: "Country Name" },
    ];

    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  // getCargoListRecords() {
  //   this.countryService.getCountryList().subscribe((res: Country[]) => {
  //     this.country = res;
  //       if (res.length === 0) {
  //       this.emptymessage = 'No Record Found'
  //     } 
  //     setTimeout(() => { this.checkListRecord = true }, 200);
  //   })
  // }

  getCountryListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    this.countryService.getCountryList(cPage, nRows, filter).subscribe((res: CountryList) => {
      this.country = res.CountryData;
      this.totalCount = res.Count;
      this.countValue = res.Count
      if (this.currentPageReportTemplate === "") {
        this.currentPageReportTemplate = `Showing ${(1)} to ${this.selectedRows} of ${this.totalCount} entries`;
      }
      // if (res.PortData.length === 0) {
      //   this.emptymessage = 'No Record Found'
      // } 
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }
  openWithoutBackdrop() {
    this.open(false, false);
  }

  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddCountryComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getCountryListRecords(this.currentPage, this.selectedRows, "");
      }
    });;
  }



  editDetails(editDetails: Country) {
    this.dialogService.open(AddCountryComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getCountryListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: Country) {
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
        this.countryService.deleteCountry(deleteRecord).subscribe(res => {
          if (res == true) {
            this.getCountryListRecords(this.currentPage, this.selectedRows, "");
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
    this.getCountryListRecords(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getCountryListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getCountryListRecords(this.currentPage, totalRows, "")
  }

}






