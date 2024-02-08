import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'ngx-consumption-log',
  templateUrl: './consumption-log.component.html',
  styleUrls: ['./consumption-log.component.scss']
})
export class ConsumptionLogComponent {
  checkListRecord = true;
  selectedItem: number
  inventoryId: number
  equipmentDetailList = [];
  vesselItemDetails: any;

  constructor(private route: ActivatedRoute, private router: Router, private inventoryService: InventoryService,) { }
 
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.selectedItem = params['equipmentId'];
      this.inventoryId = params['Id']
      console.log(this.vesselItemDetails, 'value of re view')
    });


    this.getEquipmentDetail();
  }


  getEquipmentDetail() {
    this.inventoryService.getConsumption(this.selectedItem).subscribe((res: any) => {
      console.log(res)
      this.equipmentDetailList = res
    })
  }


  close() {
    this.router.navigate(['/pages/inventory/vessel-inventory-details'], {
      queryParams: { ID:this.inventoryId },
    });
  }

}
