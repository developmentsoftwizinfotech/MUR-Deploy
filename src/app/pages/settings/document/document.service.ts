import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documentUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  importFileData(file) {
    return this.http.post(this.documentUrl + 'ExcelImport', file)
  }
  importAttachmentData(file:FormData) {
    return this.http.post(this.documentUrl + `ImportSingleZip`, file)
  }
  exportFileData(fileName) {
    return this.http.get(this.documentUrl + `ExportSingleTableToExcel?tableName=${fileName}`)
  }
  exportMasterTable(fileName) {
    return this.http.get(this.documentUrl + `ExportTableToExcel?tableName=${fileName}`)
  }
  exportMasterTableDate(fileName,start,end) {
    return this.http.get(this.documentUrl + `ExportTableToExcel?tableName=${fileName}&startDate=${start}&endDate=${end}`)
  }
  masterTablelist() {
    return this.http.get(this.documentUrl + `ListAllTables`)
  }

  exportVesselTable(fileName,startDate,endDate) {
    return this.http.get(this.documentUrl + `ExportData?vesselId=${fileName}&startDate=${startDate}&&endDate=${endDate}`)
  }
  exportAttachmentTable(controlName,startDate,endDate) {
    return this.http.get(this.documentUrl + `ExportAttachments?categoryId=${controlName}&startDate=${startDate}&endDate=${endDate}`)
  }

}
