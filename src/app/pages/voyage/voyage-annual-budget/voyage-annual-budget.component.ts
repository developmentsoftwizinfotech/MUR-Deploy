import { Component, OnInit } from '@angular/core';
// import { VoyageBudget } from '../voyage-list/voyage';
import { NbDialogService } from '@nebular/theme';
import { MessageService } from 'primeng/api';
import { AddVoyageBudgetComponent } from './add-voyage-budget/add-voyage-budget.component';
import { DynamicDialogComponent } from '@app-pages/shared/dynamic-dialog/dynamic-dialog.component';
import { VoyageBudget } from '../voyage-list/voyage';
import { CustomStateError } from '@app-pages/shared/dynamic-dialog/custom-error';
import { VoyageBudgetService } from './voyage-budget.service';

@Component({
  selector: 'ngx-voyage-annual-budget',
  templateUrl: './voyage-annual-budget.component.html',
  styleUrls: ['./voyage-annual-budget.component.scss']
})
export class VoyageAnnualBudgetComponent implements OnInit {
  voyageBudget: VoyageBudget[];
  checkListRecord: boolean = false;
  yearDate: Date;
  customDatePicker = new CustomStateError();

  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  emptymessage: string;
  annualBudgetYear: string;
  // vessel: { VesselId: number; VesselName: string; IMONumber: number; FleetTypeId: number; FleetId: number; DWT_T: number; Activenumber: boolean; }[];

  constructor(


    private voyageBudgetService: VoyageBudgetService,

    private dialogService: NbDialogService, private messageService: MessageService
  ) {

  }
  ngOnInit() {
    this.getListRecords('');
    // this.productService.getProducts().then((data) => {
    //   this.vessel = data});


    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "CostHeads", header: "Cost Heads" },
      { field: "TotalBudget", header: "Total Budget" },


    ];
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }




  getListRecords(selectedYear) {
    this.checkListRecord = false
    this.voyageBudgetService.getList(selectedYear).subscribe((res: VoyageBudget[]) => {
      this.voyageBudget = res;
      this.annualBudgetYear = res[0]?.BudgetYear
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
    this.dialogService.open(AddVoyageBudgetComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getFormValue();
      }
    });;
  }



  editDetails(editDetails: VoyageBudget) {
    this.dialogService.open(AddVoyageBudgetComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getFormValue();
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: VoyageBudget) {
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
        this.voyageBudgetService.delete(deleteRecord).subscribe(res => {
          if (res == true) {
            this.getFormValue();
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
  getFormValue() {
    const yearValue = this.customDatePicker.changeDateTimeZone(this.yearDate)

    this.getListRecords(yearValue)

    console.log(yearValue, "changes in date")
  }
}
