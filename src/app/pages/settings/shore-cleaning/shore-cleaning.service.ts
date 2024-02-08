import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ShoreCleaning } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class ShoreCleaningService {
  shoreCleaningUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addShoreCleaningDetail(shoreCleaningData:ShoreCleaning) {
    return this.http.post(this.shoreCleaningUrl+'InsertShoreCleaningGang',shoreCleaningData)
   }
   updateShoreCleaningDetail(shoreCleaningData:ShoreCleaning){
     ////debugger;
     return this.http.put(this.shoreCleaningUrl+'UpdateShoreCleaningGang',shoreCleaningData)
   }
   deleteShoreCleaning(shoreCleaningData:ShoreCleaning){
     ////debugger;
     return this.http.delete(this.shoreCleaningUrl+'DeleteShoreCleaningGang/'+ shoreCleaningData.ShoreCleaningGangId)
   }
  //  getShoreCleaningList() {
  //    return this.http.get(this.shoreCleaningUrl+'ShoreCleaningGangList')
  //  }
   getCountrylist() {
    return this.http.get(this.shoreCleaningUrl+'CountryList')
  }

  getShoreCleaningList(cpage,nRows,filter) {
    return this.http.get(this.shoreCleaningUrl+`ShoreCleaningGangList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
}
