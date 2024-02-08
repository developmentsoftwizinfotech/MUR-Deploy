import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { OprType } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class OprService {
  oprType: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addOprTypeDetail(oprData:OprType) {
    return this.http.post(this.oprType+'InsertOprType',oprData)
   }
   updateOprTypeDetail(oprData:OprType){
     ////debugger;
     return this.http.put(this.oprType+'UpdateOprType',oprData)
   }
   deleteOprType(oprData:OprType){
     ////debugger;
     return this.http.delete(this.oprType+'DeleteOprType/'+ oprData.OprTypeId)
   }
   getOprTypeList(cpage,nRows,filter) {
     return this.http.get(this.oprType+`OprTypeList?c=${cpage}&p=${nRows}&filter=${filter}`)

   }
   

}
