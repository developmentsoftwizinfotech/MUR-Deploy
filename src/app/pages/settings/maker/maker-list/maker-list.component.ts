
import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { NbDialogService } from "@nebular/theme";
import { AddCargoComponent } from "@app-pages/settings/cargo/add-cargo/add-cargo.component";
import { Cargo, Maker } from '@app-pages/settings/setting';
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { AddMakerComponent } from "../add-maker/add-maker.component";
import { MakerService } from "../maker.service";
@Component({
  selector: 'ngx-maker-list',
  templateUrl: './maker-list.component.html',
  styleUrls: ['./maker-list.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class MakerListComponent implements OnInit{


    Maker: Maker[];
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
      private makerService: MakerService,
      private dialogService: NbDialogService,
      private messageService: MessageService
    ) {

    }
    ngOnInit() {

      this.selectedRows = "25"
      this.nextCount = 25;
      this.currentPage = 1;
      this.totalRows = 10
      // this.getCargoListRecords(this.currentPage, this.selectedRows, "");
      this.getMakerList();
      this.items = { label: "Maker Management", formName: "Add Maker" };
      this.cols = [
        { field: "MakerName", header: "Maker Name" },
      ];
      setTimeout(() => {
        this.emptymessage = "No Record Found"
      }, 1000);
    }

    getMakerList() {
      this.checkListRecord = false
      ////debugger;
      this.makerService.getMakerList().subscribe((res: Maker[]) => {
        ////debugger;
        this.Maker = res;
        if (res.length === 0) {
          this.emptymessage = 'No Record Found'
        }
        setTimeout(() => { this.checkListRecord = true }, 200);
      })
    }

    // getCargoListRecords(cPage, nRows, filter) {
    //   this.makerService.getMakerList(cPage, nRows, filter).subscribe((res: CargoList) => {
    //      this.Maker = res.CargoData;
    //     this.totalCount = res.Count;
    //     this.countValue = res.Count

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
      this.dialogService.open(AddMakerComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
        console.log(data, "value of ")
        if (data !== undefined) {
          this.showPop('success', 'Success', 'Record Saved');
          // this.getCargoListRecords(this.currentPage, this.selectedRows, "");
          this.getMakerList();
        }
      });;
    }



    editDetails(editDetails: Maker) {
      this.dialogService.open(AddMakerComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
        if (data !== undefined) {
          // this.getCargoListRecords(this.currentPage, this.selectedRows, "");
          this.getMakerList();
          this.showPop('success', 'Success', 'Record Saved');
        }
      });;
      console.log(editDetails, "edits details")

    }


    deleteDetails(deleteRecord: Maker) {
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
          this.makerService.deleteMaker(deleteRecord).subscribe(res => {
            if (res == true) {
              this.showPop('error', 'Delete', 'Record Deleted');
              // this.getCargoListRecords(this.currentPage, this.selectedRows, "");
              this.getMakerList();
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
      // this.getCargoListRecords(this.currentPage, +pagiNo.rows, "");
      this.getMakerList();
    }

    filterBy(inputVal) {
      console.log(inputVal.target.value)
      const filterValue = inputVal.target.value
      // this.getCargoListRecords(this.currentPage, this.totalRows, filterValue);
      this.getMakerList();
    }

    getChangeRows(totalRows) {
      this.firstCount = this.firstCount
      this.nextCount = this.firstCount + (+totalRows) - 1
      // this.getCargoListRecords(this.currentPage, totalRows, "")
      this.getMakerList();
    }

  }






