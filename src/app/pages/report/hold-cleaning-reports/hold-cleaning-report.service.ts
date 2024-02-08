import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HoldCleaningReportService {

  holdCleaningReportsUrl: string = environment.baseApiUrl;
  holdCleaningImagesUrl: string = environment.baseApiUrl + 'ImportedImages/';
  constructor(private http: HttpClient) { }
  // addCargoDetail(holdCleaningReports:Cargo) {
  //   return this.http.post(this.holdCleaningReportsUrl+'InsertCargo',holdCleaningReports)
  //  }
  //  updateCargoDetail(holdCleaningReports:Cargo){
  //    ////debugger;
  //    return this.http.put(this.holdCleaningReportsUrl+'UpdateCargo',holdCleaningReports)
  //  }
  //  deleteCargo(holdCleaningReports:Cargo){
  //    ////debugger;
  //    return this.http.delete(this.holdCleaningReportsUrl+'DeleteCargo/'+ holdCleaningReports.CargoId)
  //  }
   getVoyageHoldCleaningList() {
     return this.http.get(this.holdCleaningReportsUrl+`VoyageHoldCleaningList`)
   }
   getHoldCleaningReportsList(voyageId) {
     return this.http.get(this.holdCleaningReportsUrl+`VoyageHoldCleaning?voyageId=${voyageId}`)
   }
   getSummaryRemarkTable(voyageId,IMO,rptDate) {
     return this.http.get(this.holdCleaningReportsUrl+`HoldCleaningSummary?voyageId=${voyageId}&vesselId=${IMO}&rptDate=${rptDate}`)
   }
   getVoyageNumberList() {
    return this.http.get(this.holdCleaningReportsUrl+`VoyageNumber`)
  }
   getHoldRemarksList(holdNo,voyageId) {
    return this.http.get(this.holdCleaningReportsUrl+`HoldRemark?holdNo=${holdNo}&voyageId=${voyageId}`)
  }
   getSummaryRemarksList(voyageId) {
    return this.http.get(this.holdCleaningReportsUrl+`SummaryRemark?voyageId=${voyageId}`)
  }
   getRemarksGridList(remarkDate,voyageId) {
    return this.http.get(this.holdCleaningReportsUrl+`RemarkByDate?remarkDate=${remarkDate}&voyageId=${voyageId}`)
  }
   getHoldGridList(holdNo,voyageId,vesselId) {
    return this.http.get(this.holdCleaningReportsUrl+`RemarkWithGrid?voyageId=${voyageId}&vesselId=${vesselId}&holdNo=${holdNo}`)
  }
  //  getCargoList(cpage,nRows,filter) {
  //   return this.http.get(this.holdCleaningReportsUrl+`CargoList?c=${cpage}&p=${nRows}&filter=${filter}`)
  // }
}
