import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '@app-pages/inventory/inventory';

@Injectable({                   
  providedIn: 'root'
})
export class EquipmentService {
  equipmentUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addEquipmentDetail(equipmentData:Equipment) {
    return this.http.post(this.equipmentUrl+'InsertEquipment',equipmentData)
   }
   updateEquipmentDetail(equipmentData:Equipment){
     ////debugger;
     return this.http.put(this.equipmentUrl+'UpdateEquipment',equipmentData)
   }
   deleteEquipment(equipmentData:Equipment){
     ////debugger;
     return this.http.delete(this.equipmentUrl+'DeleteEquipment/'+ equipmentData.EquipmentId)
   }
   getEquipmentList() {
     return this.http.get(this.equipmentUrl+'ReqEquipmentList')
   }
   getEditEquipmentList(editEquipment:Equipment) {
    return this.http.get(this.equipmentUrl+'EditEquipment/'+ editEquipment.EquipmentId )
  }

 
   getUnitByEquipmentList(equipmentCategoryId:number) {
     return this.http.get(this.equipmentUrl+'UnitByEquipment/'+ equipmentCategoryId)
   }

  //  ReqEquipmentList
}
