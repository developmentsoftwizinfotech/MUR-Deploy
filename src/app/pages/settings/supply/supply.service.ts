import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { Supply } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  supplyUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addSupplyDetail(supplyData:Supply) {
    return this.http.post(this.supplyUrl+'InsertSupplyType',supplyData)
   }
   updateSupplyDetail(supplyData:Supply){
     ////debugger;
     return this.http.put(this.supplyUrl+'UpdateSupplyType',supplyData)
   }
   deleteSupply(SupplyData:Supply){
     ////debugger;
     return this.http.delete(this.supplyUrl+'DeleteSupplyType/'+ SupplyData.SupplyTypeId)
   }
  //  getSupplyList() {
  //    return this.http.get(this.supplyUrl+'SupplyTypeList')
  //  }

   
   getSupplyList(cpage,nRows,filter) {
  return this.http.get(this.supplyUrl+`SupplyTypeList?c=${cpage}&p=${nRows}&filter=${filter}`)
}
}
