import { Component } from '@angular/core';
import { ConfirmationService, MessageService, SelectItem } from "primeng/api";
import { NbComponentStatus, NbDialogService, NbToastrService } from "@nebular/theme";
import { AddFleetNameComponent } from '@app-pages/settings/fleet-name/add-fleet-name/add-fleet-name.component';
import { Fleet, FleetList } from '@app-pages/settings/setting';
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { FleetService } from '@app-pages/settings/fleet-name/fleet.service';


@Component({
  selector: 'ngx-fleet-name-list',
  templateUrl: './fleet-name-list.component.html',
  styleUrls: ['./fleet-name-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class FleetNameListComponent {
  @Component({
    selector: 'ngx-fleet-type-list',
    templateUrl: './fleet-type-list.component.html',
    styleUrls: ['./fleet-type-list.component.scss'],
  })

  fleet: Fleet[];
  checkListRecord: boolean = false;
  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
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
    private fleetService: FleetService,
    private dialogService: NbDialogService, private messageService: MessageService
  ) {

  }
  ngOnInit() {
    
    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    this.getFleetListRecords(this.currentPage, this.selectedRows, "");
    // this.getFleetListRecords();
    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "CargoName", header: "Fleet Name" },
    ];
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getFleetListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    this.fleetService.getfleetList(cPage, nRows, filter).subscribe((res: FleetList) => {
      this.fleet = res.FleetData;
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

  // getFleetListRecords(cPage, nRows, filter) {
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
    this.dialogService.open(AddFleetNameComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getFleetListRecords(this.currentPage, this.selectedRows, "");
      }
    });;
  }

  editDetails(editDetails: Fleet) {
    this.dialogService.open(AddFleetNameComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getFleetListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: Fleet) {
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
        this.fleetService.deletefleet(deleteRecord).subscribe(res => {
          if (res == true) {
            this.getFleetListRecords(this.currentPage, this.selectedRows, "");
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
    this.getFleetListRecords(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getFleetListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getFleetListRecords(this.currentPage, totalRows, "")
  }

}







