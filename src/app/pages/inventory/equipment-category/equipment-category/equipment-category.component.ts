import { Component } from '@angular/core';
import { EquipmentCategoryService } from '@app-pages/inventory/equipment-category/equipment-category.service';
import { NbDialogService } from '@nebular/theme';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EquipmentCategory } from '@app-pages/settings/setting';
import { AddEquipmentCategoryComponent } from '@app-pages/inventory/equipment-category/add-equipment-category/add-equipment-category.component';
import { DynamicDialogComponent } from '@app-pages/shared/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'ngx-equipment-category',
  templateUrl: './equipment-category.component.html',
  styleUrls: ['./equipment-category.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class EquipmentCategoryComponent {
  equipmentCategory: EquipmentCategory[];
  checkListRecord: boolean = false;


  items: { label: string; }[];
  statuses: { label: string; value: string; }[];
  emptymessage: string;


  constructor(
    private dialogService: NbDialogService, private equipmentCategoryService: EquipmentCategoryService, private messageService: MessageService
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
    this.equipmentCategoryService.getEquipmentCategoryList().subscribe((res: EquipmentCategory[]) => {

      this.equipmentCategory = res;
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
    this.dialogService.open(AddEquipmentCategoryComponent, { closeOnBackdropClick, autoFocus }).onClose.subscribe(data => {
      console.log(data, "value of ")
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');
        this.getEquipmentListRecords();
      }
    });;
  }



  editDetails(editDetails: EquipmentCategory) {

    this.dialogService.open(AddEquipmentCategoryComponent, { context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data => {
      if (data !== undefined) {
        this.showPop('success', 'Success', 'Record Saved');

        this.getEquipmentListRecords();
      }
    });;
    console.log(editDetails, "edits details")
    // this.open(false);
    // this.product = { ...product };
    // this.productDialog = true;
  }


  deleteDetails(deleteRecord: EquipmentCategory) {
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
        this.equipmentCategoryService.deleteEquipmentCategory(deleteRecord).subscribe(res => {
          if (res) {
            this.getEquipmentListRecords();
            this.showPop('error', 'Delete', 'Record Deleted');
          }
        })
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
