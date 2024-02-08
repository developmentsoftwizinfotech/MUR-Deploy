import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { CircularCategory } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class CircularService {

  circularUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addCircularDetail(circularData:CircularCategory) {
    return this.http.post(this.circularUrl+'InsertCircularCategory',circularData)
   }
   updateCircularDetail(circularData:CircularCategory){
     ////debugger;
     return this.http.put(this.circularUrl+'UpdateCircularCategory',circularData)
   }
   deleteCircular(circularData:CircularCategory){
     ////debugger;
     return this.http.delete(this.circularUrl+'DeleteCircularCategory/'+ circularData.CircularCategoryId)
   }
  //  getCircularList() {
  //    return this.http.get(this.circularUrl+'CircularCategoryList')
  //  }
  getCircularList(cpage,nRows,filter) {
    return this.http.get(this.circularUrl+`CircularCategoryList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
}
