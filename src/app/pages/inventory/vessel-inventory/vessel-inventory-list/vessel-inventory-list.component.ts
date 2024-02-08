import { InventoryService } from './../inventory.service';

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
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-vessel-inventory-list',
  templateUrl: './vessel-inventory-list.component.html',
  styleUrls: ['./vessel-inventory-list.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class VesselInventoryListComponent implements OnInit {

  activeIndex: number = 0;
  loading: boolean = true;
  messageArchived:string;
  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  vesselInventory: any[];
  emptymessage: string;
  checkListRecord: boolean=false;

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private vesselService: VendorService,
    private fb: FormBuilder,
    private inventoryService:InventoryService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {

  }
  ngOnInit() {
    this.changeInventoryList('Active');



    this.cols = [
      { field: "Vessel", header: "Vessel" },
      { field: "Minimum Levels Maintained", header: `Minimum Levels Maintained` },
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


  changeInventoryList(value: string) {
    this.checkListRecord = false
    debugger;
    this.inventoryService.getVesselInventoryList().subscribe((res: any[]) => {
      if (res) {
        if (value == "Archived") {
          this.activeIndex = 1
          this.vesselInventory  = res.filter(isArchived => isArchived.IsArchived == true)
          // console.log(this.circular, "this.circular")
          this.messageArchived = 'Move to Active'
          setTimeout(() => { this.checkListRecord = true }, 1000);
        } else {
          this.activeIndex = 0
          this.vesselInventory  = res.filter(isArchived => isArchived.IsArchived == false)
          // console.log(this.circular, "this.circular2")

          this.messageArchived = 'Move to Archived'
          setTimeout(() => { this.checkListRecord = true }, 1000);
        }
      }
      if (res.length == 0) {
        this.emptymessage = 'No Record Found'
      }
    })


  }

  moveArchived(selected: any) {
    console.log(selected)
    this.inventoryService.getArchivedList(selected).subscribe(res => {
      if (res) {
        if (selected.IsArchived == true) {
          this.changeInventoryList("Archived");
        } else {
          this.changeInventoryList("Active");
        }
      }
    })
  }

  getInventoryList() {
    this.inventoryService.getInventoryList().subscribe((res: any) => {
      this.messageArchived = 'Move to Archived'
      this.vesselInventory = res;
      if (res.length === 0) {
        this.emptymessage = 'No Record Found'

      }
      setTimeout(() => { this.checkListRecord = true }, 200);

    })



  }




  openWithoutBackdrop() {
    this.open(false, false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddVesselInventoryComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {

      if (data !== undefined) {
        this.changeInventoryList('Active');
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
  }



  editDetials(editDetails: Vendor) {
    this.dialogService.open(AddVesselInventoryComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.changeInventoryList('Active');
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")

  }
  // manageLicense(addLicense: License) {
  //   this.dialogService.open(AddLicenseComponent, { context: { selectedItem: addLicense }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
  //     if (data !== undefined) {
  //       this.getVesselListRecords();
  //       this.showPop('success', 'Success', 'Record Saved');
  //     }
  //   });;

  //   // this.open(false);
  //   // this.product = { ...product };
  //   // this.productDialog = true;
  // }

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
        // User clicked "Yes", perform the desired action
        this.inventoryService.deleteInventoryCategory(deleteRecord).subscribe(res => {
          if (res) {
            this.changeInventoryList('Active');
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
        this.getInventoryList();
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
  }

  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }


  selectedTab: number = 1;

  dataForTable1: any[] = [
    { column1: 'Data 1', column2: 'Data 2' },
    { column1: 'Data 3', column2: 'Data 4' },
    // Add more data objects for Table 1 if needed
  ];

  dataForTable2: any[] = [
    { columnA: 'Data A', columnB: 'Data B' },
    { columnA: 'Data C', columnB: 'Data D' },
    // Add more data objects for Table 2 if needed
  ];


  exportExcel() {
    // import("xlsx").then(xlsx => {
    //   const worksheet = xlsx.utils.json_to_sheet(this.vendor);
    //   const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    //   const excelBuffer: any = xlsx.write(workbook, {

    //     bookType: "xlsx",
    //     type: "array"
    //   });
    //   this.saveAsExcelFile(excelBuffer, "products");
    // });
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
  vesselDetials(selectedVessel){
  this.router.navigate(['/pages/inventory/vessel-inventory-details'], {
      queryParams: { ID:selectedVessel },
    });
  }

}






