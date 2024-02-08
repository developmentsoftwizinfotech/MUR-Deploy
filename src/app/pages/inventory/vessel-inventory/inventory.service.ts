import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  inventoryUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addInventoryDetail(inventoryData: any) {
    debugger;
    return this.http.post(this.inventoryUrl + 'InsertVesselInventory', inventoryData)
  }
   updateInventoryDetail(inventoryData:any){
     return this.http.put(this.inventoryUrl+'UpdateVesselInventory',inventoryData)
   }
  deleteInventoryCategory(inventory: any) {
    return this.http.delete(this.inventoryUrl + `DeleteInventory/${inventory.Id}`)
  }
  getArchivedList(inventoryArchive: any) {
    return this.http.delete(this.inventoryUrl + `ArchivedInventory?id=${inventoryArchive.Id}&archive=${!inventoryArchive.IsArchived}`)
  }
  getEquipmentFieldList(vesselId) {
    return this.http.get(this.inventoryUrl + `VesselListById?vesselId=${vesselId}`)
  }
  getEditInventory(vesselId) {
    return this.http.get(this.inventoryUrl + `GetByVesselId?vesselId=${vesselId}`)
  }

  getInventoryList() {
    return this.http.get(this.inventoryUrl + 'Get')
  }
  getVesselInventoryList() {
    return this.http.get(this.inventoryUrl + 'GetInventoriesList')
  }
  getMakerList() {
    return this.http.get(this.inventoryUrl + 'GetMaker')
  }
  getConditionList() {
    return this.http.get(this.inventoryUrl + 'GetCondition')
  }

  geVesselInventoryDetails(){

    return this.http.get(this.inventoryUrl + 'ItemLists?imoNumber=1234567')

    
  }
  getInventoryItemDetails(inventoryId:number){

    return this.http.get(this.inventoryUrl + `GetInventoryItem?inventoryId=${inventoryId}`)

    
  }
  getEquipmentDetail(equipmentId:number,imo:string){

    return this.http.get(this.inventoryUrl + `GetEquipmentLog?equipmentid=${equipmentId}&imonumber=${imo}`)

    
  }
  getConsumption(equipmentId:number){

    return this.http.get(this.inventoryUrl + `GetConsumptionLog?equipmentid=${equipmentId}`)

    
  }
}
