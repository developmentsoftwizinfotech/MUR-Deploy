import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { NbDialogService } from "@nebular/theme";
import { AddCargoComponent } from "@app-pages/settings/cargo/add-cargo/add-cargo.component";
import { Cargo, CargoList } from '@app-pages/settings/setting';
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { CargoService } from "@app-pages/settings/cargo/cargo.service";
@Component({
  selector: 'ngx-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class CargoListComponent implements OnInit {
  cargo: Cargo[];
  loading: boolean = false;
  items: { label: string; formName: string };
  cols: { field: string; header: string; }[];
  checkListRecord: boolean = false;
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

  constructor(
    private cargoService: CargoService,
    private dialogService: NbDialogService,
    private messageService: MessageService
  ) {

  }
  ngOnInit() {

    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    this.getCargoListRecords(this.currentPage, this.selectedRows, "");
    // this.getCargoListRecords();
    this.items = { label: "Cargo Management", formName: "Add Cargo" };
    this.cols = [
      { field: "CargoName", header: "Cargo Name" },
    ];
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  // getCargoListRecords() {
  //   ////debugger;
  //   this.cargoService.getCargoList().subscribe((res: Cargo[]) => {
  //     ////debugger;
  //     this.cargo = res;
  //     if (res.length === 0) {
  //       this.emptymessage = 'No Record Found'
  //     } 
  //     setTimeout(() => { this.checkListRecord = true }, 200);
  //   })
  // }

  getCargoListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    this.cargoService.getCargoList(cPage, nRows, filter).subscribe((res: CargoList) => {
       this.cargo = res.CargoData;
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
    this.dialogService.open(AddCargoComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getCargoListRecords(this.currentPage, this.selectedRows, "");
      }
    });;
  }



  editDetails(editDetails: Cargo) {
    this.dialogService.open(AddCargoComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getCargoListRecords(this.currentPage, this.selectedRows, "");
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")

  }


  deleteDetails(deleteRecord: Cargo) {
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
        ////debugger;
        // User clicked "Yes", perform the desired action
        this.cargoService.deleteCargo(deleteRecord).subscribe(res => {
          if (res == true) {
            this.showPop('error', 'Delete', 'Record Deleted');
            this.getCargoListRecords(this.currentPage, this.selectedRows, "");
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
    this.getCargoListRecords(this.currentPage, +pagiNo.rows, "");
  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getCargoListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getCargoListRecords(this.currentPage, totalRows, "")
  }

}





