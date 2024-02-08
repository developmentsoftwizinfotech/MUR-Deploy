import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.prod';
import { Maker } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class MakerService {

  makerUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addMakerDetail(MakerData:Maker) {
    return this.http.post(this.makerUrl+'InsertMaker',MakerData)
   }
   updateMakerDetail(MakerData:Maker){
     ////debugger;
     return this.http.put(this.makerUrl+'UpdateMaker',MakerData)
   }
   deleteMaker(MakerData:Maker){
     ////debugger;
     return this.http.delete(this.makerUrl+'DeleteMaker/'+ MakerData.MakerId)
   }
   getMakerList() {
     return this.http.get(this.makerUrl+'MakerList')
   }
   getEquipmentWithId(categoryId:number) {
     return this.http.get(this.makerUrl+`MakerEquipmentList?EquipmentCategoryId=${categoryId}`)
   }

  //  getMakerList(cpage,nRows,filter) {
  //   return this.http.get(this.makerUrl+`MakerList?c=${cpage}&p=${nRows}&filter=${filter}`)
  // }
}
