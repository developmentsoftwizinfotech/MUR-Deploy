import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {
  analysisUrl: string = environment.baseApiUrl;
  costHeading: [
    {
        "costHead": "Total Cleaning Costs"
    },
    {
        "costHead": "Idle Time Cost"
    },
    {
        "costHead": "Additional Crew Bonus $"
    },
    {
        "costHead": "Idle Time Days For Cleaning"
    },
    {
        "costHead": "Hold Advisory by Shore & Roving Supdt Cost"
    },
    {
        "costHead": "Hold Cleaning Equipment"
    },
    {
        "costHead": "Idle Time Bunker $"
    },
    {
        "costHead": "Hold Cleaning Chemicals"
    },
    {
        "costHead": "Shore Cleaning Gang"
    },
    {
        "costHead": "Hold Cleaning Consumables"
    }
]



  constructor(private http: HttpClient) { }

  getCargoWiseAnalysis(filterDetails){
    return this.http.post(`${this.analysisUrl}GetCargoWiseCountAndPercentage`,filterDetails)
  }
  getDetailsSHAAnalysis(filterDetails){
    return this.http.post(`${this.analysisUrl}GetSHAAnalysisFilter`,filterDetails)
  }
  getDetailsGraphAnalysis(filterDetails){
    return this.http.post(`${this.analysisUrl}GetVendorCostGraph`,filterDetails)
  }
  getDetailsSCGAnalysis(filterDetails){
    return this.http.post(`${this.analysisUrl}GetSCGAnalysis`,filterDetails)
  }
  getDetailsMonthlyAnalysis(filterDetails){
    return this.http.post(`${this.analysisUrl}GetBudgetMonthlyAnalysis`,filterDetails)
  }
  getDetailsQuaterlyAnalysis(filterDetails){
    return this.http.post(`${this.analysisUrl}GetBudgetQuarterlyAnalysis`,filterDetails)
  }
  getDetailsVendorMonthlyAnalysis(filterDetails){
    return this.http.post(`${this.analysisUrl}GetVendorMonthlyAnalysis`,filterDetails)
  }
  getDetailsVendorQuaterlyAnalysis(filterDetails){
    return this.http.post(`${this.analysisUrl}GetVendorQuarterlyAnalysis`,filterDetails)
  }
}
