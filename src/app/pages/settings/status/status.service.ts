import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Status } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  statusUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addStatusDetail(statusData:Status) {
    return this.http.post(this.statusUrl+'InsertStatus',statusData)
   }
   updateStatusDetail(statusData:Status){
     ////debugger;
     return this.http.put(this.statusUrl+'UpdateStatus',statusData)
   }
   deleteStatus(statusData:Status){
     ////debugger;
     return this.http.delete(this.statusUrl+'DeleteStatus/'+ statusData.StatusId)
   }
   getStatusList() {
     return this.http.get(this.statusUrl+'StatusList')
   }
  //  getCountrylist() {
  //    return this.http.get(this.statusUrl+'CountryList')
  //  }
}
