import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Country } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countryUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addCountryDetail(countryData:Country) {
    return this.http.post(this.countryUrl+'InsertCountry',countryData)
   }
   updateCountryDetail(countryData:Country){
     ////debugger;
     return this.http.put(this.countryUrl+'UpdateCountry',countryData)
   }
   deleteCountry(countryData:Country){
     ////debugger;
     return this.http.delete(this.countryUrl+'DeleteCountry/'+ countryData.CountryId)
   }
  

   getCountryList(cpage,nRows,filter) {
    return this.http.get(this.countryUrl+`CountryList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
}
