import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import {  NbDialogService  } from "@nebular/theme";
import { AddChartererComponent } from "@app-pages/settings/charterer/add-charterer/add-charterer.component";
import { Charterer, ChartererList } from "@app-pages/settings/setting";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { ChartererService } from "@app-pages/settings/charterer/charterer.service";
@Component({
  selector: 'ngx-charterer-list',
  templateUrl: './charterer-list.component.html',
  styleUrls: ['./charterer-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ChartererListComponent implements OnInit {


  @Component({
    selector: 'ngx-operator-list',
    templateUrl: './operator-list.component.html',
    styleUrls: ['./operator-list.component.scss'],
    providers: [MessageService, ConfirmationService],

  })




  charterer: Charterer[];
  checkListRecord: boolean = false;
  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  emptymessage: string;
  selectedRows: any;
  firstCount: number = 1;
  currentPage: number;
  nextCount: number;
  totalRows: number = 0;
  totalCount: number;
  filterTableValue: any;
  currentPageReportTemplate: string = '';
  countValue: number;
  // vessel: { VesselId: number; VesselName: string; IMONumber: number; FleetTypeId: number; FleetId: number; DWT_T: number; Activenumber: boolean; }[];

  constructor(
    private chartererService: ChartererService,
    private dialogService: NbDialogService, private messageService: MessageService
  ) {

  }
  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    // this.getPortList(this.currentPage, this.selectedRows, "");
    this.getChartererListRecords(this.currentPage, this.selectedRows, "");
    // this.productService.getProducts().then((data) => {
    //   this.vessel = data});


    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "CargoName", header: "Charterer Name" },


    ];
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getChartererListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    this.chartererService.getChartererList(cPage, nRows, filter).subscribe((res: ChartererList) => {
 
      this.charterer = res.ChartererData;
            this.totalCount = res.Count
            this.countValue = res.Count
           if (this.currentPageReportTemplate === "") {
        this.currentPageReportTemplate = `Showing ${(1)} to ${this.selectedRows} of ${this.totalCount} entries`;
      }
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
    this.dialogService.open(AddChartererComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getChartererListRecords(this.currentPage, this.selectedRows, "");
      }
    })
  }



  editDetails(editDetails: Charterer) {
    this.dialogService.open(AddChartererComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getChartererListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: Charterer) {
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
        this.chartererService.deleteCharterer(deleteRecord).subscribe(res => {
          if (res == true) {
            this.getChartererListRecords(this.currentPage, this.selectedRows, "");
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
    this.getChartererListRecords(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getChartererListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getChartererListRecords(this.currentPage, totalRows, "")
  }
}







