import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Port } from '@app-pages/settings/setting';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PortService {
  PortUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  addPortDetail(PortData:Port) {
    return this.http.post(this.PortUrl+'InsertPort',PortData)
   }
   updatePortDetail(PortData:Port){
     ////debugger;
     return this.http.put(this.PortUrl+'UpdatePort',PortData)
   }
   deletePort(PortData:Port){
     ////debugger;
     return this.http.delete(this.PortUrl+'DeletePort/'+ PortData.PortId)
   }
   getPortList(cpage,nRows,filter) {
     return this.http.get(this.PortUrl+`PortList?c=${cpage}&p=${nRows}&filter=${filter}`)
   }
}
