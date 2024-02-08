import { Injectable } from '@angular/core';
import { VesselOperator } from './vessel-operator';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VesselOperatorService {
  operatorUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addOperatorDetail(OperatorData:VesselOperator) {
    return this.http.post(this.operatorUrl+'InsertVesselOperator',OperatorData)
   }
   updateOperatorDetail(OperatorData:VesselOperator){
     ////debugger;
     return this.http.put(this.operatorUrl+'UpdateVesselOperator',OperatorData)
   }
   deleteOperator(OperatorData:VesselOperator){
     ////debugger;
     return this.http.delete(this.operatorUrl+'DeleteVesselOperator/'+ OperatorData.VesselOperatorId)
   }
  //  getOperatorList() {
  //    return this.http.get(this.operatorUrl+'VesselOperatorList')
  //  }
   getOperatorList(cpage,nRows,filter) {
    return this.http.get(this.operatorUrl+`VesselOperatorList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
   
}
