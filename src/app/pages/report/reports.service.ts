import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  reportUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getReportVessels() {
    return this.http.get(this.reportUrl + `VesselNameList`)
  }
  getOtherDropdownList() {
    return this.http.get(this.reportUrl + `GetFilterValueList`)
  }
  getFixtureAndRequisitionListDropdownList() {
    return this.http.get(this.reportUrl + `GetFixtureAndRequisitionList`)
  }
  getVendorAndMakerList() {
    return this.http.get(this.reportUrl + `GetVendorAndVendorMakerList`)
  }
  getCategoryAndEquipmentList() {
    return this.http.get(this.reportUrl + `GetEquipmentAndCategoryList`)
  }
  getMURDropdownList() {
    return this.http.get(this.reportUrl + `GetAnalysisTemplateFilterValueList`)
  }
  getPortDropdownList() {
    return this.http.get(this.reportUrl + `GetPortFilterValueList`)
  }

  getDetailsReports(filterDetails) {
    return this.http.post(`${this.reportUrl}GetVoyageSummary`, filterDetails)
  }
  getAnalysisDetailsReports(filterDetails) {
    return this.http.post(`${this.reportUrl}VoyageAnalysisiTemplate`, filterDetails)
  }
  getDetailsMisReports(filterDetails) {
    return this.http.post(`${this.reportUrl}GetMonthlySummary`, filterDetails)
  }
  getDetailsYTDReports(filterDetails) {
    return this.http.post(`${this.reportUrl}YTDYearlySummary`, filterDetails)
  }
  getDetailsQSReports(filterDetails) {
    return this.http.post(`${this.reportUrl}GetQuarterlySummary`, filterDetails)
  }

  getFilterDropdown(controlName: string, controlList: any, setValues: string, indexControl:number, mapKeyIndex:number,formName:any) {
    const formControl = formName.get(controlName);
    const targetControlName = `${controlName.slice(0, -indexControl)}Ids`;
    console.log(targetControlName, "khokhn")

    if (formControl) {
      if (setValues === 'all') {
        formName.get(controlName).setValue(controlList);
        formName.get(targetControlName).setValue(controlList.map(x => x[`${targetControlName.slice(0, -mapKeyIndex)}`]));
      } else if (formControl.value) {
        formName.get(targetControlName).setValue(formControl.value.map(x => x[`${targetControlName.slice(0, -mapKeyIndex)}`]));
      }
    }
  }
  getPlannedFilterDropdown(controlName: string, controlList: any, setValues: string, indexControl:number, mapKeyIndex:number,formName:any) {
    const formControl = formName.get(controlName);
    const targetControlName = `${controlName.slice(0, -indexControl)}Ids`;
    console.log(targetControlName, "khokhn")

    if (formControl) {
      if (setValues === 'all') {
        formName.get(controlName).setValue(controlList);
        formName.get(targetControlName).setValue(controlList.map(x => x.PlanStatusId));
      } else if (formControl.value) {
        formName.get(targetControlName).setValue(formControl.value.map(x => x.PlanStatusId));
      }
    }
  }
  getNameFilterDropdown(controlName: string, controlList: any, setValues: string, indexControl:number, mapKeyIndex:number,formName:any) {
    const formControl = formName.get(controlName);
    const targetControlName = `${controlName.slice(0, -indexControl)}`;
    console.log(targetControlName, "khokhn")

    if (formControl) {
      if (setValues === 'all') {
        formName.get(controlName).setValue(controlList);
        formName.get(targetControlName).setValue(controlList.map(x => x[`${targetControlName.slice(0, -mapKeyIndex)}`]));
      } else if (formControl.value) {
        formName.get(targetControlName).setValue(formControl.value.map(x => x[`${targetControlName.slice(0, -mapKeyIndex)}`]));
      }
    }
  }
  getSpecialFilterDropdown(controlName: string, controlList: any, setValues: string, fromControlName:string, mapKeyName:string,formName:any) {
    const formControl = formName.get(controlName);
    const targetControlName = fromControlName;
    console.log(targetControlName, "new form")

    if (formControl) {
      if (setValues === 'all') {
        formName.get(controlName).setValue(controlList);
        formName.get(targetControlName).setValue(controlList.map(x => x[mapKeyName]));
      } else if (formControl.value) {
        formName.get(targetControlName).setValue(formControl.value.map(x => x[mapKeyName]));
      }
    }
  }

}
