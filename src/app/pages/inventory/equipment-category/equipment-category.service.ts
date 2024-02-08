import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { EquipmentCategory } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class EquipmentCategoryService {
  equipmentUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addEquipmentCategoryDetail(equipmentData:EquipmentCategory) {
    return this.http.post(this.equipmentUrl+'InsertEquipmentCategory',equipmentData)
   }
   updateEquipmentCategoryDetail(equipmentData:EquipmentCategory){
     ////debugger;
     return this.http.put(this.equipmentUrl+'UpdateEquipmentCategory',equipmentData)
   }
   deleteEquipmentCategory(equipmentData:EquipmentCategory){
     ////debugger;
     return this.http.delete(this.equipmentUrl+'DeleteEquipmentCategory/'+ equipmentData.EquipmentCategoryId)
   }
   getEquipmentCategoryList() {
     return this.http.get(this.equipmentUrl+'EquipmentCategoryList')
   }
   getEquipmentList() {
    return this.http.get(this.equipmentUrl+'ReqEquipmentList')
  }
}
