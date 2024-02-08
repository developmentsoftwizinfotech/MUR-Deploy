import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { Unit } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  unitUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addUnitDetail(unitData:Unit) {
    return this.http.post(this.unitUrl+'InsertUnit',unitData)
   }
   updateUnitDetail(unitData:Unit){
     ////debugger;
     return this.http.put(this.unitUrl+'UpdateUnit',unitData)
   }
   deleteUnit(unitData:Unit){
     ////debugger;
     return this.http.delete(this.unitUrl+'DeleteUnit/'+ unitData.UnitId)
   }
  //  getUnitList() {
  //    return this.http.get(this.unitUrl+'UnitList')
  //  }
   getUnitList(cpage,nRows,filter) {
    return this.http.get(this.unitUrl+`UnitList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
}
