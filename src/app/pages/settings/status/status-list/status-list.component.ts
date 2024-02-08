
import { Component, OnInit } from "@angular/core";

import { ConfirmationService, MessageService, SelectItem } from "primeng/api";
import {  NbDialogService, NbToastrService } from "@nebular/theme";
import { AddStatusComponent } from "@app-pages/settings/status/add-status/add-status.component";
import {  Status } from '@app-pages/settings/setting';
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";

import { StatusService } from '@app-pages/settings/status/status.service';


@Component({
  selector: 'ngx-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class StatusListComponent implements OnInit {





  status: Status[];
  checkListRecord: boolean = false;



  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  cols: { field: string; header: string; }[];
  emptymessage: string;
  // vessel: { VesselId: number; VesselName: string; IMONumber: number; FleetTypeId: number; FleetId: number; DWT_T: number; Activenumber: boolean; }[];

  constructor(


    private statusService: StatusService,

    private dialogService: NbDialogService, private messageService: MessageService
  ) {

  }
  ngOnInit() {
    this.getstatusListRecords();
    // this.productService.getProducts().then((data) => {
    //   this.vessel = data});


    this.items = [{ label: "ADD NEW CLENING STAGE" }];
    this.cols = [
      { field: "Status", header: "Status" },


    ];
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getstatusListRecords() {
    this.checkListRecord = false
    this.statusService.getStatusList().subscribe((res: Status[]) => {
      this.status = res;
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
    this.dialogService.open(AddStatusComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getstatusListRecords();
      }
    });;
  }



  editDetails(editDetails: Status) {
    this.dialogService.open(AddStatusComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.getstatusListRecords();
        this.showPop('success', 'Success', 'Record Saved');
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: Status) {
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
        this.statusService.deleteStatus(deleteRecord).subscribe(res => {
          if (res == true) {
            this.getstatusListRecords();
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

}







