import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { SHA } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class ShaService {

  shaUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addSHADetail(shaData:SHA) {
    return this.http.post(this.shaUrl+'InsertSHA',shaData)
   }
   updateSHADetail(shaData:SHA){
     ////debugger;
     return this.http.put(this.shaUrl+'UpdateSHA',shaData)
   }
   deleteSHA(shaData:SHA){
     ////debugger;
     return this.http.delete(this.shaUrl+'DeleteSHA/'+ shaData.SHAId)
   }
  //  getSHAList() {
  //    return this.http.get(this.shaUrl+'SHAList')
  //  }
   getCountrylist() {
     return this.http.get(this.shaUrl+'CountryList')
   }
  getCountryList(cpage,nRows,filter) {
    return this.http.get(this.shaUrl+`CountryList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
   
  getSHAList(cpage,nRows,filter) {
  return this.http.get(this.shaUrl+`SHAList?c=${cpage}&p=${nRows}&filter=${filter}`)
}
}
