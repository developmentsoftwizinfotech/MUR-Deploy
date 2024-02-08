import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { FleetType } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class FleetTypeService {
  fleetTypeUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addfleetTypeDetail(fleetTypeData:FleetType) {
    return this.http.post(this.fleetTypeUrl+'InsertfleetType',fleetTypeData)
   }
   updatefleetTypeDetail(fleetTypeData:FleetType){
     ////debugger;
     return this.http.put(this.fleetTypeUrl+'UpdatefleetType',fleetTypeData)
   }
   deletefleetType(fleetTypeData:FleetType){
     ////debugger;
     return this.http.delete(this.fleetTypeUrl+'DeletefleetType/'+ fleetTypeData.FleetTypeId)
   }
  //  getfleetTypeList() {
  //    return this.http.get(this.fleetTypeUrl+'fleetTypeList')
  //  }
   getfleetTypeList(cpage,nRows,filter) {
    return this.http.get(this.fleetTypeUrl+`FleetTypeList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
}
