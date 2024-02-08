import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequisitionList } from '@app-pages/inventory/requisition/add-requisition/customer';
import { RequisitionService } from '@app-pages/inventory/requisition/requisition.service';

@Component({
  selector: 'ngx-view-requisition-details',
  templateUrl: './view-requisition-details.component.html',
  styleUrls: ['./view-requisition-details.component.scss']
})
export class ViewRequisitionDetailsComponent implements OnInit {
  selectedItem: any;
  requisitionOrderDetails: any;
  requisitionData: any;
  modeByRequisition: string;
  imageURL: string;
  constructor(private route: ActivatedRoute,
    private router: Router, private requisitionService: RequisitionService) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedItem = params['ID'];
      this.modeByRequisition = params['data']
      console.log(this.modeByRequisition, 'value of re view')
      //        this.selectedItem = params['editDetails'];
      // Now you have both the ID and data in your component
    });

    this.getDataFromIdrequisitionManagement(this.selectedItem)
  }

  async getDataFromIdrequisitionManagement(requisitionId) {
    await this.requisitionService.getEditRequisitionWithEquipmentID(requisitionId).subscribe((res: RequisitionList) => {
      debugger;
      this.requisitionOrderDetails = res[0];
      if (this.requisitionOrderDetails.DeliveryChallan !== null) {

        this.imageURL = this.requisitionService.RequisitionUrl + 'OrderChallan/' + this.requisitionOrderDetails.DeliveryChallan;
      } else {
        this.imageURL = null
      }
      const updatedData = {
        "EquipmentManagementList": res[0].EquipmentManagementList.map(category => ({
          ...category,
          EquipmentList: category.EquipmentList.filter(equipment => equipment.MinOrderQty > 0)
        }))
      };
      const filteredCategories = updatedData.EquipmentManagementList.filter(category =>
        category.EquipmentList.some(equipment => equipment.MinOrderQty > 0)
      );

      console.log(updatedData, "this")
      this.requisitionData = filteredCategories;
      const totalList = this.requisitionData.flatMap(category => category.EquipmentList)
      let totalSum = 0;
      totalList.forEach(item => {
        totalSum += item.Total;
      });



    })
  }

  close(selectedBack) {
    // this.dialogRef.close();
    if (selectedBack === 'vendorRequisition') {
      this.router.navigate(['/pages/inventory/vendor-requisition']);

    } else {
      this.router.navigate(['/pages/inventory/requisition']);

    }
  }

}
