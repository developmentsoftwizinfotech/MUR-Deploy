import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VoyageBudgetService {
  budgetUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  addDetail(budgetData) {
    return this.http.post(this.budgetUrl+'InsertVoyageBudget',budgetData)
   }
   updateDetail(budgetData){
     ////debugger;
     return this.http.put(this.budgetUrl+'UpdateVoyageBudget',budgetData)
   }
   delete(budgetData){
     ////debugger;
     return this.http.delete(this.budgetUrl+'DeleteVoyageBudget/'+ budgetData.AnualBudgetId)
   }
   getList(yearDate) {
     return this.http.post(this.budgetUrl+'GetAnualBudgetByYear',{"YearDate": yearDate})
   }

   getCostHeaderList() {
     return this.http.get(this.budgetUrl+'GetCostHeadList')
   }

}
