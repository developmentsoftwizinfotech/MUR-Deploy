import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'ngx-detail-equipment',
  templateUrl: './detail-equipment.component.html',
  styleUrls: ['./detail-equipment.component.scss']
})
export class DetailEquipmentComponent implements OnInit {
  checkListRecord = true;
  selectedItem: number
  inventoryId: number
  equipmentDetailList = [];
  vesselItemDetails: any;
  IMONumber: string;

  constructor(private route: ActivatedRoute, private router: Router, private inventoryService: InventoryService,) { }
 
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.selectedItem = params['equipmentId'];
      this.inventoryId = params['Id']
      this.IMONumber = params['ImoNumber']
      console.log(this.vesselItemDetails, 'value of re view')
    });


    this.getEquipmentDetail();
  }


  getEquipmentDetail() {
    this.inventoryService.getEquipmentDetail(this.selectedItem,this.IMONumber).subscribe((res: any) => {
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
