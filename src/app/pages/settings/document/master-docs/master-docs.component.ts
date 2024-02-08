import { CircularService } from './../../circular/circular.service';
import { Component, OnInit } from '@angular/core';
import { ValidationError } from 'ngx-awesome-uploader';
import { DemoFilePickerAdapter } from '../file-picker.adapter';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { DocumentService } from '../document.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VesselService } from '../../vessel/vessel.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'ngx-master-docs',
  templateUrl: './master-docs.component.html',
  styleUrls: ['./master-docs.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class MasterDocsComponent implements OnInit {
  activeIndex: number = 0;
  dropDownMasterlist: any;
  base64Output: any;
  public adapter = new DemoFilePickerAdapter(this.http);
  importFile: any;
  loading: boolean = false;
  nbForm: FormGroup;
  downloadFile: string;
  needDatePicker: boolean = false;
  isVesslName: boolean = false;
  vesselList: any;
  currentPage: number;
  selectedRows: any;
  selectedFilezip: any;
  isAttachment: boolean = true
  circularList: any;
  constructor(private circularService:CircularService,private datePipe: DatePipe, private formBuilder: FormBuilder, private http: HttpClient, private documentService: DocumentService, private vesselService: VesselService, private messageService: MessageService) {

    this.nbForm = this.formBuilder.group({
      selectImportFile: ['fileImport'],
      ImportFile: [''],
      StartDate: [''],
      EndDate: [''],
      TableName: null,
      VesselName: null,
      CircularName: null
    });
  }
  ngOnInit(): void {
    this.selectedRows = "25"
    this.currentPage = 1;
    this.getExportList();
    this.getVesselListRecords(this.currentPage, this.selectedRows, "");
    this.getCategoryListRecords(this.currentPage, this.selectedRows, "");
  }

  getExportList() {
    this.documentService.masterTablelist().subscribe(res => {
      this.dropDownMasterlist = res
    })
  }

  async getVesselListRecords(cPage, nRows, filter) {
    debugger
    console.log(filter, "valies f")
    await this.vesselService.getVesselList(cPage, nRows, filter).subscribe((res: any) => {
      this.vesselList = res.VesselData;
      // if (res.length === 0) {
      //   this.emptymessage = 'No Record Found'
      // }
    })
  }
  async getCategoryListRecords(cPage, nRows, filter) {
    debugger
    console.log(filter, "valies f")
    await this.circularService.getCircularList(cPage, nRows, filter).subscribe((res: any) => {
      this.circularList = res.CircularCategoryData;
      // if (res.length === 0) {
      //   this.emptymessage = 'No Record Found'
      // }
    })
  }

  async exportData(select) {
    const selectTable = this.nbForm.value.VesselName
    const startDate = this.nbForm.value.StartDate
    const endDate = this.nbForm.value.EndDate
    if (startDate && endDate) {
      if (selectTable) {
        await this.exportFileAttachment(select);
      } else {
        await this.exportFileAttachment(select);
      }
    } else {;
      switch ( !startDate || !endDate) {
        // case !selectTable:
        //   this.showPop('info', 'Alert', 'Please Select Vessel Name');
        //   break;
        case !startDate:
          this.showPop('info', 'Alert', 'Please Select Start Date');
          break;
        case !endDate:
          this.showPop('info', 'Alert', 'Please Select End Date');
          break;



      }
    }





  }

  clickLinkExport(path) {
    if (path) {
      const fileUrl = this.documentService.documentUrl + path;
      // Create a hidden anchor element
      const anchor = document.createElement('a');
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.href = fileUrl;
      anchor.download = 'Voyages_20231031110603.xlsx';
      anchor.click();
      document.body.removeChild(anchor);
    } else {
      // this.showPop('info', 'Alert', 'Please Select Export Name');
    }
  }
  clickAttachLinkExport(path) {
    if (path) {
      const fileUrl = this.documentService.documentUrl + path;
      // Create a hidden anchor element
      const anchor = document.createElement('a');
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.href = fileUrl;
      anchor.download = 'Circular_20231031110603.zip';
      anchor.click();
      document.body.removeChild(anchor);
    } else {
      // this.showPop('info', 'Alert', 'Please Select Export Name');
    }
  }


  importData(select) {
    this.loading = true
    if (select == 'attachment') {
      const formData = new FormData();
      formData.append('file', this.selectedFilezip);
      console.log(formData, "formdata");
      this.documentService.importAttachmentData(formData).subscribe(res => {
        if (res) {
          this.loading = false;
          this.nbForm.get('ImportFile').setValue(null);
          this.showPop('success', 'Success', 'Import Successfully');
        }
        console.log(res)
      })
    } else {

      this.documentService.importFileData(this.importFile).subscribe(res => {
        if (res) {
          this.loading = false;
          this.nbForm.get('ImportFile').setValue(null);
          this.showPop('success', 'Success', 'Import Successfully');
        }
        console.log(res)
      })
    }



  }
  changeDocs(value: string) {
    ////debugger;
    if (value == "Export") {
      this.activeIndex = 1
      // this.voyageService.getCompletedList().subscribe((res: Voyage[]) => {
      //   this.voyageList = res
      //   console.log(res, "voyageList")
      //   if (res == null) {
      //     this.emptymessage = 'No Record Found'
      //   } else {
      //     setTimeout(() => { this.checkListRecord = true }, 200);
      //   }

      // })
    } else {
      this.activeIndex = 0
      // this.voyageService.getCommencedList().subscribe((res: Voyage[]) => {
      //   this.voyageList = res
      //   console.log(res, "voyageList1")

      //   if (res == null) {
      //     this.emptymessage = 'No Record Found'
      //   } else {
      //     setTimeout(() => { this.checkListRecord = true }, 200);
      //   }
      // })
    }
  }

  public uploadSuccess(event): void {


    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
    };


  }

  onFileSelected(event: any): void {
    debugger;
    const file = event.target.files[0];
    this.selectedFilezip = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64String = e.target.result.split(',')[1]; // Get the base64 content (after the comma)
        this.processBase64Excel(base64String);
      };

      reader.readAsDataURL(file);
    }
  }

  processBase64Excel(base64String: string): void {
    // You can use the base64String as needed (e.g., send it to an API, display it, etc.)
    this.importFile = { ExcelPath: base64String };
    console.log('ExcelPath:', base64String);
  }

  public onValidationError(error: ValidationError): void {
    alert(`Validation Error ${error.error} in ${error.file?.name}`);
  }


  showPop(status: string, summary: string, detail: string) {
    this.messageService.add({ severity: status, summary: summary, detail: detail })
  }

  selectTable(selected) {
    debugger;
    if (selected) {
      switch (selected) {
        case "Countries":
          this.needDatePicker = true;
          this.isVesslName = false
          break;
        case "Vessels":
          this.needDatePicker = true;
          this.isVesslName = true
          break;

        default:
          this.needDatePicker = false
          this.isVesslName = false

      }
    } else {
      this.nbForm.reset();
      this.needDatePicker = false
      this.isVesslName = false
    }

  }
  async selectExportFile(selected) {
    debugger;
    await this.exportByVessel();
    // const selectedTable = this.nbForm.value.TableName
    // this.downloadFile = null

    // switch (selectedTable) {

    //   case "Vessels":
    //     this.needDatePicker = true;
    //     this.isVesslName = true
    //     await this.exportByVessel();
    //     break;

    //   default:
    //     this.needDatePicker = false
    //     await this.documentService.exportMasterTable(selectedTable).subscribe((res: any) => {
    //       const formattedPath = 'ExportFiles/' + res.FileName;
    //       if (res) {
    //         this.loading = false;
    //         this.downloadFile = `${formattedPath}`
    //         this.clickLinkExport(this.downloadFile)
    //       }
    //       console.log(this.downloadFile)
    //     })
    // }

    // if (selectedTable !== undefined) {
    //   if (selectedTable === "Countries") {
    //     this.needDatePicker = true;
    //     this.exportByDateRange();
    //   } else if (selectedTable === "Vessels") {
    //     this.isVesslName = true
    //     this.exportByVessel();
    //   } else {
    //     this.needDatePicker = false
    //     this.documentService.exportMasterTable(selectedTable).subscribe((res: any) => {
    //       const formattedPath = 'ExportFiles/' + res.FileName;
    //       if (res) {
    //         this.loading = false;
    //         this.downloadFile = `${formattedPath}`
    //       }
    //       console.log(this.downloadFile)
    //     })
    //   }
    // }

  }

  // async exportByDateRange() {
  //   debugger;
  //   const formValue = this.nbForm.value

  //   const formattedStartDate = this.datePipe.transform(formValue.StartDate, 'yyyy-MM-dd');
  //   const formattedEndDate = this.datePipe.transform(formValue.EndDate, 'yyyy-MM-dd');

  //   if (!formValue.RangeDate.start || !formValue.RangeDate.end){
  //     this.showPop('error', 'Error', 'Invalid Date Range');
  //   }
  //   if (formValue.RangeDate.start && formValue.RangeDate.end) {
  //     await this.documentService.exportMasterTableDate(formValue.TableName, formattedStartDate, formattedEndDate).subscribe((res: any) => {
  //       if (res==null){
  //         this.showPop('info', 'Alert', 'No Content This Range');
  //       }
  //       const formattedPath = 'ExportFiles/' + res.FileName;
  //       if (res) {
  //         this.loading = false;
  //         this.downloadFile = `${formattedPath}`
  //         this.clickLinkExport(this.downloadFile)
  //       }
  //     })
  //   } else {
  //     return this.needDatePicker = true;
  //   }
  // }

  async exportByVessel() {
    const formValue = this.nbForm.value
    const formattedStartDate = this.datePipe.transform(formValue.StartDate, 'yyyy-MM-dd');
    const formattedEndDate = this.datePipe.transform(formValue.EndDate, 'yyyy-MM-dd');
    await this.documentService.exportVesselTable(formValue.VesselName, formattedStartDate, formattedEndDate).subscribe((res: any) => {
      // const pathFile = res.FilePath
      // const pathParts = pathFile.split("\\");
      // const lastTwoParts = pathParts.slice(-2);
      // const formattedPath = lastTwoParts.join("/");
      const formattedPath = 'ExportFiles/' + res.FileName;
      if (res) {
        this.loading = false;
        this.downloadFile = `${formattedPath}`
        this.clickLinkExport(this.downloadFile)
      }
    })
  }
  async exportAttachmentTable() {
    const formValue = this.nbForm.value
    const formattedStartDate = this.datePipe.transform(formValue.StartDate, 'yyyy-MM-dd');
    const formattedEndDate = this.datePipe.transform(formValue.EndDate, 'yyyy-MM-dd');
    await this.documentService.exportAttachmentTable(formValue.CircularName, formattedStartDate, formattedEndDate).subscribe((res: any) => {
      // const pathFile = res.FilePath
      // const pathParts = pathFile.split("\\");
      // const lastTwoParts = pathParts.slice(-2);
      // const formattedPath = lastTwoParts.join("/");
      const formattedPath = 'ExportedAttachement/' + res.FileName;
      if (res) {
        this.loading = false;
        this.downloadFile = `${formattedPath}`
        this.clickAttachLinkExport(this.downloadFile)
      }
    }, (err: any) => {
      if(err.status){
         this.showPop('info', 'Alert', 'No Records Found');
         this.loading = false;
      }
     console.log(err.status,"err handling")
    }

    )
  }
  checkImportFile() {
    debugger;
    const selectFileName = this.nbForm.value.selectImportFile

    if (selectFileName == 'fileImport') {
      this.isAttachment = false
    } else {
      this.isAttachment = true
    }

  }




  exportFileAttachment(select) {
    this.loading = true
    if (select == 'attachment') {
      this.exportAttachmentTable()
    } else {

      this.exportByVessel();
    }



  }
}
