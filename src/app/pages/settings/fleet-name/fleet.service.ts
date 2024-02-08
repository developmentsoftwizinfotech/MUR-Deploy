import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Fleet } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class FleetService {

  fleetUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addfleetDetail(fleetDate:Fleet) {
    return this.http.post(this.fleetUrl+'Insertfleet',fleetDate)
   }
   updatefleetDetail(fleetDate:Fleet){
     ////debugger;
     return this.http.put(this.fleetUrl+'Updatefleet',fleetDate)
   }
   deletefleet(fleetDate:Fleet){
     ////debugger;
     return this.http.delete(this.fleetUrl+'Deletefleet/'+ fleetDate.FleetId)
   }
  //  getfleetList() {
  //    return this.http.get(this.fleetUrl+'fleetList')
  //  }
   getfleetList(cpage,nRows,filter) {
    return this.http.get(this.fleetUrl+`FleetList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
}
