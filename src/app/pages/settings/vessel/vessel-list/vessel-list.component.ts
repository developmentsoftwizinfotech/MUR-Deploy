
import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { FormBuilder, } from "@angular/forms";
import { ConfirmationService, MessageService} from "primeng/api";
import {  NbDialogService, NbToastrService } from "@nebular/theme";
import { AddVesselComponent } from "@app-pages/settings/vessel/add-vessel/add-vessel.component";

import { License, Vessel } from "@app-pages/settings/vessel/vessel";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { AddLicenseComponent } from "@app-pages/settings/vessel/add-license/add-license.component";
import { LicenseLogComponent } from "@app-pages/settings/vessel/license-log/license-log.component";
import { VesselService } from '@app-pages/settings/vessel/vessel.service';


@Component({
  selector: 'ngx-vessel-list',
  templateUrl: './vessel-list.component.html',
  styleUrls: ['./vessel-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})

export class VesselListComponent implements OnInit {
  vessel: Vessel[];
  checkListRecord: boolean = false;


  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  emptymessage: string;
  // vessel: { VesselId: number; VesselName: string; IMONumber: number; FleetTypeId: number; FleetId: number; DWT_T: number; Activenumber: boolean; }[];
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
  constructor(

    private primengConfig: PrimeNGConfig,
    private vesselService: VesselService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {

  }
  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 10;
    this.currentPage = 1;
    this.totalRows = 10
    this.getVesselListRecords(this.currentPage, this.selectedRows, "");
    // this.getVesselListRecords();
    // this.productService.getProducts().then((data) => {
    //   this.vessel = data});


    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "VesselName", header: "Vessel Name" },
      { field: "IMONumber", header: `IMO Number` },
      { field: "FleetTypeName", header: "Fleet Type" },
      { field: "FleetName", header: "Fleet Name" },
      { field: "DWT_T", header: "DWT(T)" },
      { field: "LicenseStartDate", header: "License Start" },
      { field: "LicenseEndDate", header: "License Expiring " },

    ];

    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getVesselListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    debugger
    this.vesselService.getVesselList(cPage,nRows,filter).subscribe((res: any) => {
      this.vessel = res.VesselData;
           this.totalCount = res.Count;
      this.countValue = res.Count
          // if (res.length === 0) {
      //   this.emptymessage = 'No Record Found'
      // } 
      if (this.currentPageReportTemplate === "") {
        this.currentPageReportTemplate = `Showing ${(1)} to ${this.selectedRows} of ${this.totalCount} entries`;
      }
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }
 
  openWithoutBackdrop() {
    this.open(false, false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddVesselComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {

      if (data !== undefined) {
        this.getVesselListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
  }



  editDetails(editDetails: Vessel) {
    this.dialogService.open(AddVesselComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getVesselListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }
  manageLicense(addLicense: License) {
    this.dialogService.open(AddLicenseComponent, { context: { selectedItem: addLicense }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getVesselListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;

    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }

  deleteDetails(deleteRecord: Vessel) {
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
        this.vesselService.deleteVessel(deleteRecord).subscribe(res => {
          if (res) {
            this.getVesselListRecords(this.currentPage, this.selectedRows, "");
            this.showPop('error', 'Delete', 'Record Deleted')
          }
        })
      } else if (result === false) {
        // User clicked "No", perform a different action
      } else {
        // Handle other possible button values or dialog closure
      }
    });

  }
  viewLog(selectedRow) {
    this.dialogService.open(LicenseLogComponent, { context: { selectedItem: selectedRow }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getVesselListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
  }

  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }


  // Pagination Code here
  paginate(pagiNo) {
    console.log(pagiNo)
    this.firstCount = pagiNo.first + 1;
    this.nextCount = pagiNo.first + (+pagiNo.rows);
    this.currentPage = pagiNo.page;
    this.getVesselListRecords(this.currentPage, +pagiNo.rows, "");

  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getVesselListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    debugger;

    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getVesselListRecords(this.currentPage, totalRows, "")
  }

}






