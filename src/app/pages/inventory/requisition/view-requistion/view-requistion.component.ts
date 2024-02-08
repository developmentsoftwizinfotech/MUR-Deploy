import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Requisition } from '@app-pages/inventory/inventory';
import { RequisitionService } from '../requisition.service';
import { RequisitionList } from '../add-requisition/customer';
@Component({
  selector: 'ngx-view-requistion',
  templateUrl: './view-requistion.component.html',
  styleUrls: ['./view-requistion.component.scss']
})
export class ViewRequistionComponent implements OnInit {
  title: string = "Details";
  selectedItem: any;
  requisitionData: any;
  dialogVisible: boolean = false

  constructor(protected dialogRef: NbDialogRef<ViewRequistionComponent>, private requisitionService: RequisitionService) {
    
  }
  ngOnInit(): void {
    this.requisitionManagementList(this.selectedItem.VesselId)
    this.dialogVisible = true
  }

  requisitionManagementList(id) {
    
    this.requisitionService.getEditRequisitionWithEquipmentID(id).subscribe((res: RequisitionList) => {
      this.requisitionData = res[0].EquipmentCategorylist
    })
  }
  close() {
    this.dialogRef.close();
  }

  onDialogHide() {
    this.dialogRef.close();
    this.dialogVisible = false;
  }

}
