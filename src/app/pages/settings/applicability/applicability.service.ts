import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Applicability } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class ApplicabilityService {
  applicabilityUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addApplicabilityDetail(applicabilityData:Applicability) {
    return this.http.post(this.applicabilityUrl+'InsertApplicable',applicabilityData)
   }
   updateApplicabilityDetail(applicabilityData:Applicability){
     ////debugger;
     return this.http.put(this.applicabilityUrl+'UpdateApplicable',applicabilityData)
   }
   deleteApplicability(applicabilityData:Applicability){
     ////debugger;
     return this.http.delete(this.applicabilityUrl+'DeleteApplicable/'+ applicabilityData.ApplicableId)
   }
  //  getApplicabilityList() {
  //    return this.http.get(this.applicabilityUrl+'ApplicableList')
  //  }

   getApplicabilityList(cpage,nRows,filter) {
    return this.http.get(this.applicabilityUrl+`ApplicableList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
}
