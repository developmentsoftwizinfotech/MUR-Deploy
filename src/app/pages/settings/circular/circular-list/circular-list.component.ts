import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import {  NbDialogService } from "@nebular/theme";
import { AddCircularComponent } from "@app-pages/settings/circular/add-circular/add-circular.component";
import { Cargo, CircularCategory, CircularCategoryList } from "@app-pages/settings/setting";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { CircularService } from "@app-pages/settings/circular/circular.service";

@Component({
  selector: 'ngx-circular-list',
  templateUrl: './circular-list.component.html',
  styleUrls: ['./circular-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class CircularListComponent implements OnInit {


  @Component({
    selector: 'ngx-operator-list',
    templateUrl: './operator-list.component.html',
    styleUrls: ['./operator-list.component.scss'],


  })

  circular: CircularCategory[];
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


    private circularService: CircularService,

    private dialogService: NbDialogService, private messageService: MessageService
  ) {

  }
  ngOnInit() {
    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    // this.getPortList(this.currentPage, this.selectedRows, "");
    this.getCircularList(this.currentPage, this.selectedRows, "");
    // this.productService.getProducts().then((data) => {
    //   this.vessel = data});


    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "CargoName", header: "Circular Category Name" },


    ];
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getCircularList(cPage, nRows, filter) {
    this.checkListRecord = false
    this.circularService.getCircularList(cPage, nRows, filter).subscribe((res: CircularCategoryList) => {
      this.circular = res.CircularCategoryData;
            this.totalCount = res.Count
            this.countValue = res.Count
      // if (res.length === 0) {
      //   this.emptymessage = 'No Record Found'
      // }else{
      // }
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
    this.dialogService.open(AddCircularComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getCircularList(this.currentPage, this.selectedRows, "");
      }
    });;
  }



  editDetails(editDetails: CircularCategory) {
    this.dialogService.open(AddCircularComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getCircularList(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: CircularCategory) {
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
        this.circularService.deleteCircular(deleteRecord).subscribe(res => {
          if (res == true) {
            this.getCircularList(this.currentPage, this.selectedRows, "");
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
    this.getCircularList(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getCircularList(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getCircularList(this.currentPage, totalRows, "")
  }
}







