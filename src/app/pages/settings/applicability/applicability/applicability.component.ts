import { Component } from '@angular/core';
import { ApplicabilityService } from '@app-pages/settings/applicability/applicability.service';
import { Applicability, ApplicabilityList } from '@app-pages/settings/setting';
import { AddApplicabilityComponent } from '@app-pages/settings/applicability/add-applicability/add-applicability.component';
import { DynamicDialogComponent } from '@app-pages/shared/dynamic-dialog/dynamic-dialog.component';
import { NbDialogService } from '@nebular/theme';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'ngx-applicability',
  templateUrl: './applicability.component.html',
  styleUrls: ['./applicability.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ApplicabilityComponent {
  applicability: Applicability[];
  loading: boolean = false;
  items: { label: string; formName: string};
  cols: { field: string; header: string; }[];
  checkListRecord: boolean =false;
  emptymessage: string;
  tableRows: any[]
  selectedRows: any;
  firstCount: number = 1;
  currentPage: number;
  nextCount: number;
  totalRows: number = 0;
  totalCount: number;
  filterTableValue: any;
  currentPageReportTemplate: string = '';
  countValue: number;

  constructor(
    private applicabilityService : ApplicabilityService,
    private dialogService: NbDialogService,
    private messageService:MessageService
  ) {

  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {

    this.selectedRows = "25"
    this.nextCount = 25;
    this.currentPage = 1;
    this.totalRows = 10
    this.getApplicabilityListRecords(this.currentPage, this.selectedRows, "");

    // this.getApplicabilityListRecords();
    this.items = { label: "Applicability Management", formName : "Add Applicability" };
    this.cols = [
      { field: "CargoName", header: "Cargo Name" },
    ];
    setTimeout(() => {
      this.emptymessage = "No Record Found"
    }, 1000);
  }

  // getApplicabilityListRecords() {
  //   this.applicabilityService.getApplicabilityList().subscribe((res: Applicability[]) => {
  //     this.applicability = res;
  //     if(res.length === 0){
  //       this.emptymessage = 'No Record Found'

  // }
  //     setTimeout(() => { this.checkListRecord = true }, 200);
  //   })
  // }
  getApplicabilityListRecords(cPage, nRows, filter) {
    this.checkListRecord = false
    this.applicabilityService.getApplicabilityList(cPage, nRows, filter).subscribe((res: ApplicabilityList) => {
console.log(res,"res")
      this.applicability = res.ApplicableData;
            this.totalCount = res.Count
            this.countValue = res.Count

      // this.totalCount = res.totalCount
      if (this.currentPageReportTemplate === "") {
        this.currentPageReportTemplate = `Showing ${(1)} to ${this.selectedRows} of ${this.totalCount} entries`;
      }
      // if (res.PortData.length === 0) {
      //   this.emptymessage = 'No Record Found'
      // } 
      setTimeout(() => { this.checkListRecord = true }, 200);
    })
  }

  // getPortList(cPage, nRows, filter) {
  //   this.portService.getPortList(cPage, nRows, filter).subscribe((res: PortList) => {

  //     this.port = res.PortData;
  //     this.totalCount = res.Count
  //     if (this.currentPageReportTemplate === "") {
  //       this.currentPageReportTemplate = `Showing ${(1)} to ${this.selectedRows} of ${this.totalCount} entries`;
  //     }
  //     // if (res.PortData.length === 0) {
  //     //   this.emptymessage = 'No Record Found'



  //     // } 
  //     setTimeout(() => { this.checkListRecord = true }, 200);
  //   })
  // }

  openWithoutBackdrop() {
    this.open(false,false);
  }
  protected open(closeOnBackdropClick ,autoFocus) {
    this.dialogService.open(AddApplicabilityComponent,{ closeOnBackdropClick ,autoFocus}).onClose.subscribe(data=>{
      console.log(data,"value of ")
      if(data!==undefined){
        this.showPop('success','Success','Record Saved');
        // this.getApplicabilityListRecords();
        this.getApplicabilityListRecords(this.currentPage, this.selectedRows, "");

      }
    });;
  }



  editDetails(editDetails: Applicability) {
    this.dialogService.open(AddApplicabilityComponent,{ context: { selectedItem: editDetails }, closeOnBackdropClick: false, autoFocus: false }).onClose.subscribe(data=>{
      if(data!==undefined){
        // this.getApplicabilityListRecords();
        this.getApplicabilityListRecords(this.currentPage, this.selectedRows, "");

        this.showPop('success','Success','Record Saved');
      }
    });;
    console.log(editDetails, "edits details")

  }


  deleteDetails(deleteRecord:Applicability) {
    const dialogRef = this.dialogService.open(DynamicDialogComponent, {
      context: {
        title: "Dynamic Dialog",
        message: 'Are You Sure Want To Delete',
        buttons: [
          { label: 'Cancel', value: false, status: 'basic' },
          { label: 'Delete', value: true, status: 'danger' },
        ],
      },
    });
    ////debugger;
    dialogRef.onClose.subscribe((result: any) => {
      if (result === true) {
        // User clicked "Yes", perform the desired action
        this.applicabilityService.deleteApplicability(deleteRecord).subscribe(res=>{
          if(res==true){
            // this.getApplicabilityListRecords();
            this.getApplicabilityListRecords(this.currentPage, this.selectedRows, "");

            this.showPop('error','Delete','Record Deleted');
          }
        })
      } else if (result === false) {
        // User clicked "No", perform a different action
      } else {
        // Handle other possible button values or dialog closure
      }
    });

  }

  
  showPop(status:string,summary:string,detail:string){
    this.messageService.add({severity:status,summary:summary,detail:detail})
  }

  
   
  paginate(pagiNo) {
    console.log(pagiNo)
    this.firstCount = pagiNo.first + 1;
    this.nextCount = pagiNo.first + (+pagiNo.rows);
    this.currentPage = pagiNo.page;
    this.getApplicabilityListRecords(this.currentPage, +pagiNo.rows, "");

    // this.getPortList(this.currentPage, +pagiNo.rows, "");

  }

  filterBy(inputVal) {
    console.log(inputVal.target.value)
    const filterValue = inputVal.target.value
    this.getApplicabilityListRecords(this.currentPage, this.totalRows, filterValue);
  }

  getChangeRows(totalRows) {
    debugger;

    this.firstCount = this.firstCount
    this.nextCount = this.firstCount + (+totalRows) - 1
    this.getApplicabilityListRecords(this.currentPage, totalRows, "")
  }

  }

