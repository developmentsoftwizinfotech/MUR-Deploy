import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Circular } from './circular';

@Injectable({
  providedIn: 'root'
})
export class CircularService {
  circularUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addCircularDetail(circularData: Circular) {
    //debugger
    return this.http.post(this.circularUrl + 'InsertCircular', circularData)
  }
  updateCircularDetail(circularData: Circular) {
    ////debugger;
    return this.http.put(this.circularUrl + 'UpdateCircular', circularData)
  }
  deleteCircular(circularData: Circular) {
    ////debugger;
    return this.http.delete(this.circularUrl + 'DeleteCircular/' + circularData.CircularId)
  }
  getCircularList() {
    //debugger
    return this.http.get(this.circularUrl + 'CircularList')
  }
  // getCircularCategoryList() {
  //   return this.http.get(this.circularUrl + 'CircularCategoryList')
  // }
  getArchivedList(circularData: Circular) {
    //debugger

    return this.http.delete(this.circularUrl + 'CircularArchived/' + circularData.CircularId + '?isArchived=' + !circularData.IsArchived)
  }
  getPDFList(circularId:number) {
    return this.http.get(this.circularUrl + `DownloadPDF/${circularId}`)
  }

  getCircularCategoryList(cpage,nRows,filter) {
    return this.http.get(this.circularUrl+`CircularCategoryList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
}

