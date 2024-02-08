import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Equipment } from '@app-pages/inventory/inventory';
import { AddEquipmentComponent } from '@app-pages/inventory/equipment/add-equipment/add-equipment.component';
import { DynamicDialogComponent } from '@app-pages/shared/dynamic-dialog/dynamic-dialog.component';
import { EquipmentService } from '@app-pages/inventory/equipment/equipment.service';


@Component({
  selector: 'ngx-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class EquipmentComponent {
  equipment: Equipment[];
  checkListRecord: boolean = false;


  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  emptymessage: string;


  constructor(
    private dialogService: NbDialogService,private equipmentService:EquipmentService,private messageService:MessageService
  ) {

  }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.getEquipmentListRecords();


    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  getEquipmentListRecords() {
    this.checkListRecord = false
    this.equipmentService.getEquipmentList().subscribe((res: Equipment[]) => {

    
      if(res.length === 0){
            this.emptymessage = 'No Record Found'

      }else {
        this.equipment = res;
        setTimeout(() => { this.checkListRecord = true }, 200);
      }

      // if (res.length===0) {
      //   this.emptymessage = 'No Record Found'
      // } else {
      //   this.voyageList = res.VoyageData
      //   this.totalCount = res.Count
      //   setTimeout(() => { this.checkListRecord = true }, 1000);

      // }
    })
  }




  openWithoutBackdrop() {
    this.open(false,false);
  }
  protected open(closeOnBackdropClick, autoFocus) {
    this.dialogService.open(AddEquipmentComponent, { closeOnBackdropClick , autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if(data!==undefined){
        this.showPop('success','Success','Record Saved');
      this.getEquipmentListRecords();
      }
    });;
  }



  editDetails(editDetails: Equipment) {

    console.log(editDetails,"selectedItem")

    //debugger

    this.dialogService.open(AddEquipmentComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false , autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.showPop('success','Success','Record Saved');

        this.getEquipmentListRecords();
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: Equipment) {
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
        this.equipmentService.deleteEquipment(deleteRecord).subscribe(res => {
          if (res) {
            this.getEquipmentListRecords();
            this.showPop('error','Delete','Record Deleted');
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
  showPop(status:string,summary:string,detail:string){
    this.messageService.add({severity:status,summary:summary,detail:detail})
  }

}
