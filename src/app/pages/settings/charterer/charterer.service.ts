import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Charterer } from '@app-pages/settings/setting';

@Injectable({
  providedIn: 'root'
})
export class ChartererService {

  chartererUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addChartererDetail(chartererData:Charterer) {
    return this.http.post(this.chartererUrl+'InsertCharterer',chartererData)
   }
   updateChartererDetail(chartererData:Charterer){
     ////debugger;
     return this.http.put(this.chartererUrl+'UpdateCharterer',chartererData)
   }
   deleteCharterer(chartererData:Charterer){
     ////debugger;
     return this.http.delete(this.chartererUrl+'DeleteCharterer/'+ chartererData.ChartererId)
   }
  //  getChartererList() {
  //    return this.http.get(this.chartererUrl+'ChartererList')
  //  }

   getChartererList(cpage,nRows,filter) {
    return this.http.get(this.chartererUrl+`ChartererList?c=${cpage}&p=${nRows}&filter=${filter}`)
  }
}
